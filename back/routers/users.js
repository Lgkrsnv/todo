const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');
const User = require('../models/User');

// const loginChecker = (req, res, next) => {
//   if (!req.session.user) {
//     res.redirect("/users/login");
//   } else {
//     next();
//   }
// };

router.get('/', async (req, res) => {
  try {
    const user = await User.findOne({username: req.session.user.username}).lean();
    return res.status(200).json({user})
    
  } catch (error) {
    return res.status(502).json({error})
  }
})

module.exports = router;
