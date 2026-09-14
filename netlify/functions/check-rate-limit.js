const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

function hashIP(ip) {
  return crypto.createHash("sha256").update(ip + process.env.RATE_LIMIT_SALT || "ai-census").digest("hex").slice(0, 16);
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

exports.handler = async (event) => {
  const ip = event.headers["x-forwarded-for"]?.split(",")[0]?.trim() || event.headers["client-ip"] || "unknown";
  const hash = hashIP(ip);
  const today = getToday();
  const key = `${today}:${hash}`;

  try {
    const store = getStore("rate-limits");
    const existing = await store.get(key);

    if (existing) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ allowed: false })
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ allowed: true })
    };
  } catch (err) {
    // If blobs fail, allow the submission (fail open)
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ allowed: true })
    };
  }
};
