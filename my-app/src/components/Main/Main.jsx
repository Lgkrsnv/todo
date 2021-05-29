
import { TodoList } from "../TodoList/TodoList";
import { Picture } from "../Picture/Picture";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { Logout } from "../Logout/Logout";

export const Main = () => {

  return (
    <>
      Main page

      <Switch>
        <Route exact path="/">
          <TodoList />
        </Route>
        <Route exact path="/adriana">
          <Picture />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </>
  );
};
