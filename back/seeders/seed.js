const { connect, connection } = require("mongoose");
const Games = require("../models/Todo");

async function main() {
  await connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  const todoList = [
    {
      text: "Посмотреть лекции по TS",
    },
    {
      text: "Понять apply, call, bind",
    },
    {
      text: "Firebase разобраться",
    },
    {
      text: "React анимации разобрать",
    },
    {
      text: "Токены jwt освоить",
    },
  ];

  await Games.insertMany(todoList);
  await connection.close();
}

main();
