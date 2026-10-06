// Generated from email/scorecard-email.html (placeholders become the three URLs below).
module.exports = function renderEmail({ logoUrl, headingUrl, pdfUrl }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light only">
  <title>Your Shelf Impact Scorecard</title>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root { color-scheme: light only; supported-color-schemes: light only; }
    /* Keep the white card and its colours as designed when an app switches to dark mode */
    [data-ogsb] .card, [data-ogsb] .card td { background-color: #ffffff !important; }
    [data-ogsc] .t-black { color: #000000 !important; }
    [data-ogsc] .t-grey { color: #444444 !important; }
    [data-ogsb] .btn-cell { background-color: #4472c4 !important; }
    [data-ogsc] .btn-link { color: #ffffff !important; }
    @media only screen and (max-width: 520px) {
      .outer-pad { padding: 32px 12px !important; }
      .card-pad-top { padding-top: 40px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#000000;" bgcolor="#000000">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#000000;">Your copy of the Shelf Impact Scorecard is inside.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="background:#000000;">
    <tr>
      <td align="center" class="outer-pad" style="padding:84px 16px;">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" class="card" style="width:100%;max-width:480px;background:#ffffff;background-image:linear-gradient(#ffffff,#ffffff);">
          <tr>
            <td align="center" class="card-pad-top" style="padding:55px 20px 0 20px;">
              <img src="${headingUrl}" width="282" alt="Here&rsquo;s your scorecard" style="display:block;width:282px;max-width:100%;height:auto;border:0;">
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:31px 20px 0 20px;font-family:'Figtree','Helvetica Neue',Arial,sans-serif;font-size:16.8px;line-height:24px;color:#000000;" class="t-black">
              Is your packaging pulling its weight?
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:13px 20px 0 20px;font-family:'Figtree','Helvetica Neue',Arial,sans-serif;font-size:16.8px;line-height:24px;color:#444444;" class="t-grey">
              Here is your copy of<br>The Shelf Impact Scorecard.
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:7px 20px 0 20px;font-family:'Figtree','Helvetica Neue',Arial,sans-serif;font-size:16.8px;line-height:24px;color:#444444;" class="t-grey">
              Thank you for your interest!
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px 20px 0 20px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" bgcolor="#4472c4" width="138" height="46" class="btn-cell" style="background:#4472c4;background-image:linear-gradient(#4472c4,#4472c4);width:138px;height:46px;">
                    <a href="${pdfUrl}" class="btn-link" style="display:block;width:138px;line-height:46px;font-family:'Figtree','Helvetica Neue',Arial,sans-serif;font-size:16px;text-transform:uppercase;color:#ffffff;text-decoration:none;">Download</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:71px 20px 37px 34px;">
              <img src="${logoUrl}" width="159" alt="Boxer Brands" style="display:block;width:159px;max-width:100%;height:auto;border:0;">
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
