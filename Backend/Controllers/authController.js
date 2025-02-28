const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  
    userModel.createUser(name, email, (error) => {
      if (error) return res.status(500).json({ message: "User already exists!" });
      res.status(201).json({ message: "User Registered!" });
    });
 
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel.getUserByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: "Invalid Credentials" });

    const user = results[0];
    bcrypt.compare(password, user.password, (error, isMatch) => {
      if (!isMatch) return res.status(401).json({ message: "Wrong Password!" });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true }).json({ message: "Login Successful", token });
    });
  });
};
