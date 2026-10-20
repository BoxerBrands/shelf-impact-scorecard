// Called once a day by Vercel (see "crons" in vercel.json). A small request to the
// database counts as activity, so Supabase's free plan never pauses the project.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?select=id&limit=1`, {
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });
    res.status(response.ok ? 200 : 502).json({ ok: response.ok, status: response.status });
  } catch (err) {
    console.error('Keep-alive failed:', err);
    res.status(502).json({ ok: false });
  }
};
