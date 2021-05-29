const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");
const User = require("../models/User");

// const loginChecker = (req, res, next) => {
//   if (!req.session.user) {
//     res.redirect("/users/login");
//   } else {
//     next();
//   }
// };

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find().lean();
    return res.status(200).json({ todo });
  } catch (error) {
    return res.status(501).json({ error });
  }
});

module.exports = router;
