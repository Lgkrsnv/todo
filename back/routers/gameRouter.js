const { Router } = require("express");
const router = Router();
const Games = require("../models/games");
const express = require("express");

router.get("/", async (req, res, next) => {
  // console.log(req.session.user, 'games req s u');
  const games = await Games.find().lean();
  console.log(games);
  res.json({games});
});
module.exports = router;
