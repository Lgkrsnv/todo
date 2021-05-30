import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_TODO_SAGA } from "../types";
import { addTodo } from "../actionCreators/addTodoAC";

const addTodoFetch = async (text, username) => {
  console.log(text, username, "teaxt username fetch");
  const response = await fetch(`/api/v1/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      username
    })
  });
  const result = await response.json();
  console.log('fetch result', result);
  return result;
};


function* addTodoSagaWorker(action) {
  console.log(action, 'action');
  try {
    const todo = yield call(addTodoFetch, action.payload.text, action.payload.username);
    if (todo) {
      console.log('if todo', todo);
      yield put(addTodo(todo));
    }
  } catch (error) {
    yield put({ type: "ERROR", message: error.message });
  }
}


function* TodoSagaWatcher() {
  yield takeEvery(ADD_TODO_SAGA, addTodoSagaWorker);
}
export default TodoSagaWatcher;
