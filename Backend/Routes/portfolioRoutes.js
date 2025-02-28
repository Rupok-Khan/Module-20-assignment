const express = require("express");
const { createPortfolio, getPortfolios, deletePortfolio } = require("../Controllers/portfolioController");
const verifyToken = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, createPortfolio);
router.get("/", getPortfolios);
router.delete("/:id", verifyToken, deletePortfolio);

module.exports = router;
