
import { TodoList } from "../TodoList/TodoList";
import { Picture } from "../Picture/Picture";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { Logout } from "../Logout/Logout";
import { useSelector } from "react-redux";

export const Main = () => {
  const userState = useSelector((state) => state.user);
console.log('lllll',userState.username, typeof userState.username);
  return (
    <>
      

      <Switch>
        <Route exact path="/">
        {userState.isLogin ? <TodoList /> : <Redirect to="/login" />}
          
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
