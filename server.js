const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //Import the CORS middleware

const app = express();
const PORT = 3000;

//In-memory user store (simple hardcoded users)

const users = [
  { username: "user1", password: "password123" },
  { username: "user2", password: "password456" },
];

// Enable CORS for all requests
app.use(cors());

app.use(bodyParser.json());

/**
 * Login Endpoint
 */

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  console.log(res);
  //Find user by username
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  //Check the password if correct

  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  //Login successful
  res.json({ message: `Welcome ${username}, you have successfully logged in` });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
