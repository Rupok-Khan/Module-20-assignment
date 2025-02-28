const db = require("../Config/db");

exports.createPortfolio = (title, description, img, codelink, livelink, userId, callback) => {
  db.query("INSERT INTO portfolios (title, description, img, codelink, livelink, user_id) VALUES (?, ?, ?, ?, ?, ?)", 
  [title, description, img, codelink, livelink, userId], callback);
};

exports.getAllPortfolios = (callback) => {
  db.query("SELECT * FROM portfolios", callback);
};

exports.deletePortfolio = (id, userId, callback) => {
  db.query("DELETE FROM portfolios WHERE id = ? AND user_id = ?", [id, userId], callback);
};
