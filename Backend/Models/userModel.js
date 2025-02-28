const db = require("../Config/db");

exports.createUser = (name, email, callback) => {
  db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",name, email, callback);
};

exports.getUserByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], callback);
};
