const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

function hashIP(ip) {
  return crypto.createHash("sha256").update(ip + process.env.RATE_LIMIT_SALT || "ai-census").digest("hex").slice(0, 16);
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const ip = event.headers["x-forwarded-for"]?.split(",")[0]?.trim() || event.headers["client-ip"] || "unknown";
  const hash = hashIP(ip);
  const today = getToday();
  const key = `${today}:${hash}`;

  try {
    const store = getStore("rate-limits");
    const existing = await store.get(key);

    if (existing) {
      return {
        statusCode: 429,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "already-submitted" })
      };
    }

    // Record this IP hash for today
    await store.set(key, JSON.stringify({ timestamp: Date.now() }), {
      metadata: { date: today }
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recorded: true })
    };
  } catch (err) {
    // Fail open — don't block submissions if blobs are down
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recorded: true })
    };
  }
};
