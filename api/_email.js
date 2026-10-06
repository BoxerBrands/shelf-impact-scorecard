// Generated from email/scorecard-email.html (placeholders become the URLs below).
module.exports = function renderEmail({ logoUrl, logoDarkUrl, headingUrl, headingDarkUrl, buttonDarkUrl, pdfUrl }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Your Shelf Impact Scorecard</title>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root { color-scheme: light dark; supported-color-schemes: light dark; }
    /* Dark mode design: charcoal card, white text, light blue accents, white logo */
    @media (prefers-color-scheme: dark) {
      .card { background-color: #333333 !important; background-image: linear-gradient(#333333,#333333) !important; }
      .t-black, .t-grey { color: #ffffff !important; }
      .btn-cell { background-color: #6a9ad0 !important; background-image: linear-gradient(#6a9ad0,#6a9ad0) !important; }
      .btn-link { color: #ffffff !important; }
      .light-img { display: none !important; max-height: 0 !important; overflow: hidden !important; }
      .dark-img { display: block !important; max-height: none !important; overflow: visible !important; }
    }
    /* Same dark design for Outlook apps and Outlook.com, which use their own dark mode switches */
    [data-ogsb] .card { background-color: #333333 !important; }
    [data-ogsc] .t-black, [data-ogsc] .t-grey { color: #ffffff !important; }
    [data-ogsb] .btn-cell { background-color: #6a9ad0 !important; }
    [data-ogsc] .btn-link { color: #ffffff !important; }
    [data-ogsc] .light-img { display: none !important; max-height: 0 !important; overflow: hidden !important; }
    [data-ogsc] .dark-img { display: block !important; max-height: none !important; overflow: visible !important; }
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
              <img src="${headingUrl}" width="282" alt="Here&rsquo;s your scorecard" class="light-img" style="display:block;width:282px;max-width:100%;height:auto;border:0;">
              <img src="${headingDarkUrl}" width="282" alt="Here&rsquo;s your scorecard" class="dark-img" style="display:none;max-height:0;overflow:hidden;mso-hide:all;width:282px;max-width:100%;height:auto;border:0;">
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
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="light-img">
                <tr>
                  <td align="center" bgcolor="#4472c4" width="138" height="46" class="btn-cell" style="background:#4472c4;background-image:linear-gradient(#4472c4,#4472c4);width:138px;height:46px;">
                    <a href="${pdfUrl}" class="btn-link" style="display:block;width:138px;line-height:46px;font-family:'Figtree','Helvetica Neue',Arial,sans-serif;font-size:16px;text-transform:uppercase;color:#ffffff;text-decoration:none;">Download</a>
                  </td>
                </tr>
              </table>
              <a href="${pdfUrl}" class="dark-img" style="display:none;max-height:0;overflow:hidden;mso-hide:all;line-height:0;font-size:0;"><img src="${buttonDarkUrl}" width="138" height="46" alt="Download" style="display:block;width:138px;height:46px;border:0;"></a>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:71px 20px 37px 34px;">
              <img src="${logoUrl}" width="159" alt="Boxer Brands" class="light-img" style="display:block;width:159px;max-width:100%;height:auto;border:0;">
              <img src="${logoDarkUrl}" width="159" alt="Boxer Brands" class="dark-img" style="display:none;max-height:0;overflow:hidden;mso-hide:all;width:159px;max-width:100%;height:auto;border:0;">
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
