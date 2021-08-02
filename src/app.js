const express = require("express");
const cors = require("cors");
const MongoConnection = require("./models/dbConnection");
const tableData = require("./tableDummyData");
const ChartData = require("./ChartData");
const app = express();
const port = 4001;
app.use(cors());
MongoConnection();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: tableData,
    message: "Successfully! All records has been fetched.",
  });
});
app.get("/chart", (req, res) => {
  res.status(200).json({
    success: true,
    data: ChartData,
    message: "Successfully! All records has been fetched.",
  });
});

app.listen(port, (err, req, res) => {
  console.log(`app running on http://localhost:${port}`);
});
