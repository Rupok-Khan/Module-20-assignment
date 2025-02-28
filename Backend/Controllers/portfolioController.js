const portfolioModel = require("../Models/portfolioModel");

exports.createPortfolio = (req, res) => {
  const { title, description, img, codelink, livelink } = req.body;
  const userId = req.user.id;

  portfolioModel.createPortfolio(title, description, img, codelink, livelink, userId, (error) => {
    if (error) return res.status(500).json({ message: "Error Creating Portfolio" });
    res.status(201).json({ message: "Portfolio Created!" });
  });
};

exports.getPortfolios = (req, res) => {
  portfolioModel.getAllPortfolios((err, results) => {
    if (err) return res.status(500).json({ message: "Error Fetching Portfolios" });
    res.json(results);
  });
};

exports.deletePortfolio = (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  portfolioModel.deletePortfolio(id, userId, (error) => {
    if (error) return res.status(500).json({ message: "Error Deleting Portfolio" });
    res.json({ message: "Portfolio Deleted!" });
  });
};
