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

// обработка формы регистрации
router.post("/signup", async (req, res, next) => {
  try {
    // деструктуризация тела запроса
    const { username, password } = req.body.values;
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
    // console.log(req.session.user, "sign up req session user");
    return res.status(210).json({ userId: user.id, username: user.username });
    // редиректим
  } catch (error) {
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

router.get("/logout", (req, res, next) => {
  console.log(req.session.user, "logout req s u");
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie("user_sid");
    // return res.redirect('/');
    return res.sendStatus(203);
  });
});

module.exports = router;
