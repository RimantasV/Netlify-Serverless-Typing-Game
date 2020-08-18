const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.API_KEY }).base(
  "appl6BA37wlMk89sm"
);
const table = base.table("Table 1");

exports.handler = async (event, contect, callback) => {
  const records = await table
    .select({
      fields: ["name", "score"],
      filterByFormula: "NOT(name = '')",
      sort: [{ field: "score", direction: "desc" }]
    })
    .firstPage();
  const formattedRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields
  }));
  return {
    statusCode: 200,
    body: JSON.stringify(formattedRecords)
  };
};
