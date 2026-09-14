exports.handler = async () => {
  const siteId = process.env.SITE_ID;
  const token = process.env.NETLIFY_ACCESS_TOKEN;

  if (!siteId) {
    return { statusCode: 500, body: JSON.stringify({ error: 'No site ID configured' }) };
  }

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

    if (count < 1000) {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300',
          'Netlify-CDN-Cache-Control': 'public, max-age=300'
        },
        body: JSON.stringify({ show: false })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
        'Netlify-CDN-Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify({ count, show: true })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch count' }) };
  }
};
