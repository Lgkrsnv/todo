const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const Todo = require("../models/Todo");
const User = require("../models/User");



const saltRounds = 10;
// const loginChecker = (req, res, next) => {
//   if (!req.session.user) {
//     res.redirect("/users/login");
//   } else {
//     next();
//   }
// };

// обработка формы регистрации
router.post("/signup", async (req, res, next) => {
  console.log('reqbody', req.body);
  console.log(req.body.username, req.body.password, 'username, password, req.session.user');
  try {
    // деструктуризация тела запроса
    const { username, password } = req.body;
    // создание нового юзера
    const user = new User({
      username,
      // хэширование его пароля
      password: await bcrypt.hash(password, saltRounds),
    });
    // сохранение в бд
    await user.save();
    // устанавливаем сессии локально
    req.session.user = user;
    console.log(req.session.user, 'req.session.user');
    // console.log(req.session.user, "sign up req session user");
    return res.status(210).json({ userId: user.id, username: user.username });
    // редиректим
  } catch (error) {
    console.log('err', error);
    // иначе переходим к обработчику ошибок
    res.sendStatus(510);
  }
});
// ручка для логина
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body.values;
    // ищем юзера в базе данных
    const user = await User.findOne({ username });
    // проверка (если юзер есть и пароль совпадает)
    if (user && (await bcrypt.compare(password, user.password))) {
      // тогда создаем новую локальную сессию
      req.session.user = user;
      // console.log(req.session.user, "login req session user");

      return res.status(212).json({ userId: user.id, username: user.username });
    } else {
      return res.status(404).json({ error: true })
    }
  } catch (err) {
    return res.sendStatus(502);
  }
  // деструктуризация тела запроса с формы
});


router.get("/logout", async (req, res, next) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie("user_sid");
    } catch (error) {
      next(error);
    }
  } else {
    res.json({status: "deleted"});
  }
});

module.exports = router;
