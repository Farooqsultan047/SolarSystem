import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
// conncetion
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",      // aapka password
  database: "renewable_energy",
  port: 3307                  // aapka MySQL port
});

db.connect(err => {
  if (err) console.log("DB Connection Error:", err);
  else console.log("DB Connected");
});

// Changed endpoint from /users to /plants and query to Plant table
app.get("/plants", (req, res) => {
  db.query("SELECT * FROM Plant", (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
});

// You can add more endpoints for other tables if needed
app.get("/equipment", (req, res) => {
  db.query("SELECT * FROM Equipment", (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
});

//  you can add more endpoint for other table 

app.get("/energytable", (req, res) => {
  db.query("SELECT * FROM Energytable", (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
