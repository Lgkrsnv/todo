import { SHOW_USER_TODOS } from "../types";

export const showUserTodos = (username) => async (dispatch, getState) => {
  const response = await fetch(`/api/v1/todos/${username}`);
  const { todos } = await response.json();
  console.log(todos, "todos[0] show todos");
  if (todos) {
    dispatch({
      type: SHOW_USER_TODOS,
      payload: todos,
    });
  }
};
