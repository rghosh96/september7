const express = require('express');
// const { google } = require('googleapis');
const app = express(); 

const SPREADSHEET_ID = "1Y7GvB1-UjpP5xUStzB4BDk2cAonVqutn0A9iSZfMA70";
const SHEET_ID = process.env.GOOGLE_SHEETS_SUBSCRIBERS_PAGE;
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;


/**
 * Updates values in a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The range of values to update.
 * @param {object} valueInputOption Value update options.
 * @param {(string[])[]} _values A 2d array of values to update.
 * @return {obj} spreadsheet information
 */
async function updateValues(spreadsheetId, range, valueInputOption) {
  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const service = google.sheets({version: 'v4', auth});
  let values = [
    ["rashi", "Yes"],      // Sample data row
    ["gabe", "No"],      // Another sample data row
    // Add more rows as needed
  ];
  const resource = {
    values,
  };
  try {
    const result = await service.spreadsheets.values.update({
      spreadsheetId,
      range, // Adjusted range to start from A2
      valueInputOption,
      resource,
    });
    console.log('%d cells updated.', result.data.updatedCells);
    return result;
  } catch (err) {
    // TODO (Developer) - Handle exception
    throw err;
  }
}


const port = 3001; 

app.get("/api/data", async (req, res) => {
  console.log("AB TO CALL UPDATE VALUES")
  updateValues(SPREADSHEET_ID, "Sheet1!A2:B", "RAW")
});


app.get('/', (req, res) => { 
  // Handle your API logic here 
  res.json({ message: 'Hello from Express!' });
}); 

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`); 
});