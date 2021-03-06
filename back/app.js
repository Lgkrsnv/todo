const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// библиотека для логирования
const morgan = require("morgan");
// библиотека для парсинга куки
const cookieParser = require("cookie-parser");
// библиотека для сессий
const session = require("express-session");
// модуль для работы с путями в файловой системе
const path = require("path");
// импорт класса для хранения сессий
const MongoStore = require("connect-mongo");

// импорт middleware для проверки сессий

const usersRouter = require('./routers/users');
const todosRouter = require('./routers/todos');

const Todo = require("./models/Todo");
const User = require("./models/User");

function cookiesCleaner(req, res, next) {
  // если куки есть и нет текущей сессии, то чистим куки
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
}

const app = express();
const PORT = 7000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const options = {
  store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/todo" }),
  // ключ
  key: "user_sid",
  secret: "anything here",
  resave: false,
  saveUninitialized: false,
  cookie: {
    // срок жизин куки
    expires: 1000 * 60 * 1000,
  },
};
// подключаем middleware для использования сессий
const sessionMiddleware = session(options);

app.use(sessionMiddleware);
// подключаем middleware для чистки куки
app.use(cookiesCleaner);

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/todos', todosRouter);

app.listen(PORT, async () => {
  mongoose
    .connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("sucsess connect to mongoose"))
    .catch(() => console.log("error connect to mongoose"));
  console.log(`Server started at port:${PORT}`);
});

