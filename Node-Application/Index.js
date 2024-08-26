const express = require("express");
const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});
const app = express();
const port = process.env.PORT || 3000;

const users = [
  { email: "user1@example.com", phone: "123-456-7890" },
  { email: "user2@example.com", phone: "987-654-3210" },
  { email: "user3@example.com", phone: "456-789-1234" },
  { email: "user4@example.com", phone: "789-123-4567" },
  { email: "user5@example.com", phone: "321-654-9870" },
];
app.use(express.static(path.join(__dirname, "build")));

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
