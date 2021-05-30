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

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({username}).lean();
    console.log('user', user);
    const todos =  await Promise.all(user.todos.map(async(todoObjId) => {
     return  await Todo.findOne({_id: String(todoObjId._id)})
    }));
    console.log(todos);
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(501).json({ error });
  }
});

router.post("/", async (req, res) => {
  const { text, username } = req.body;
  console.log("insidde", text, username);
  try {
    const todo = await Todo.create({ text: text });
    const user = await User.findOneAndUpdate(
      { username: username },
      { $push: { todos: todo._id } }
    );
    return res.status(200).json({ todo });
  } catch (error) {
    return res.status(502).json({ error });
  }
});

module.exports = router;
