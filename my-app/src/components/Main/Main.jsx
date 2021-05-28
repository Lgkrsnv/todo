import { useMainThemeContext } from "../../context/MainThemeContext";
import { TodoList } from "../TodoList/TodoList";

export const Main = () => {

  return (
    <>
    <button onClick={changeTheme}>Change theme</button>
      <TodoList />
    </>
  );
};
