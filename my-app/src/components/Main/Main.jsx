
import { TodoList } from "../TodoList/TodoList";
import { Picture } from "../Picture/Picture";
import { Switch, Route } from "react-router-dom";

export const Main = () => {

  return (
    <>


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
