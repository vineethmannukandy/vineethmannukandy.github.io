/**
 * Google Apps Script — Survey webhook.
 *
 * Setup:
 * 1. Create a new Google Sheet. Name the first sheet tab "Responses".
 * 2. In the Sheet, go to Extensions > Apps Script.
 * 3. Delete any starter code and paste this whole file in.
 * 4. Click Deploy > New deployment > select type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5. Click Deploy, authorize the permissions when prompted.
 * 6. Copy the generated Web App URL.
 * 7. Paste that URL into SURVEY_ENDPOINT_URL in js/data.js.
 *
 * Every submission from the site will be appended as a new row.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses")
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Responses");

  ensureHeaderRow(sheet);

  let data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    data = e.parameter || {};
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.role || "",
    data.rating || "",
    data.message || "",
    data.page || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Role", "Rating", "Message", "Page"]);
    sheet.setFrozenRows(1);
  }
}
