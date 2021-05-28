import { useMainThemeContext } from "../../context/MainThemeContext";
import { TodoList } from "../TodoList/TodoList";
import { Picture } from "../Picture/Picture";
import { Switch, Route } from "react-router-dom";

export const Main = () => {
  const { mainTheme, setMainTheme } = useMainThemeContext();
  const changeTheme = () => {
    if (mainTheme === "light") {
      setMainTheme("dark");
    } else {
      setMainTheme("light");
    }
    console.log(mainTheme);
  };
  return (
    <>
      <button onClick={changeTheme}>Change theme</button>

      <Switch>
        <Route exact path="/">
          <TodoList />
        </Route>
        <Route exact path="/adriana">
          <Picture />
        </Route>
      </Switch>
    </>
  );
};
