import { useMainThemeContext } from "../../context/MainThemeContext";
import { TodoList } from "../TodoList/TodoList";

export const Main = () => {
  const {mainTheme, setMainTheme} = useMainThemeContext()
  const changeTheme = () => {
    if (mainTheme === 'light') {
      setMainTheme('dark')
    } else {
      setMainTheme('light')
    }
    console.log(mainTheme);
  }
  return (
    <>
    <button onClick={changeTheme}>Change theme</button>
      <TodoList />
    </>
  );
};
