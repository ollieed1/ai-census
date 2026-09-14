exports.handler = async () => {
  const siteId = process.env.SITE_ID || 'a73d9293-70ad-4299-81be-423357bf2e86';
  const token = process.env.NETLIFY_ACCESS_TOKEN;

  if (!token) {
    return { statusCode: 500, body: JSON.stringify({ error: 'No access token' }) };
  }

  try {
    const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/forms`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const forms = await res.json();
    const census = forms.find(f => f.name === 'ai-census');
    const count = census ? census.submission_count : 0;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify({ count, show: count >= 1000 })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch count' }) };
  }
};
