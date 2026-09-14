const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email } = req.body || {};

  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'Please enter a valid email address.' });
    return;
  }

  const {
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    SUPABASE_PDF_URL,
    RESEND_API_KEY,
    FROM_EMAIL,
  } = process.env;

  try {
    // Save the email to Supabase (subscribers table)
    const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email }),
    });

    if (!supabaseRes.ok) {
      const detail = await supabaseRes.text();
      console.error('Supabase insert failed:', detail);
      res.status(502).json({ error: 'Something went wrong saving your details. Please try again.' });
      return;
    }

    // Email the PDF link via Resend
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: 'Your Shelf Impact Scorecard',
        html: `
          <p>Hi there,</p>
          <p>Thanks for your interest! Here's your copy of the Shelf Impact Scorecard:</p>
          <p><a href="${SUPABASE_PDF_URL}">Download the Shelf Impact Scorecard (PDF)</a></p>
          <p>Boxer Brands</p>
        `,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error('Resend send failed:', detail);
      res.status(502).json({ error: 'Your details were saved, but the email failed to send. Please try again.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
