import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Add your MySQL password here
  database: "blog", // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("MySQL connected...");
});

// Register endpoint
app.post("/register", (req, res) => {
  const { username, email, password, phone } = req.body;
  const sql =
    "INSERT INTO profile (UserID, username, password, email, phone) VALUES (UUID(), ?, ?, ?, ?)";
  db.query(sql, [username, password, email, phone], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res
        .status(500)
        .json({ error: "Internal Server Error", details: err });
    }
    res.send("User registered successfully");
  });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM profile WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res
        .status(500)
        .json({ error: "Internal Server Error", details: err });
    }
    if (result.length > 0) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid email or password");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
