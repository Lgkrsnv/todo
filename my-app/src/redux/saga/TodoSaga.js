import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_TODO_SAGA, ADD_USER_SAGA } from "../types";
import { addUser } from "../actionCreators/addUserAC";
import { addTodo } from "../actionCreators/addTodoAC";

const addTodoFetch = async (id) => {
  // console.log(id, "id fetch");
  // const response = await fetch(`/api/v1/games/${id}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const result = await response.json();
  // console.log('fetch result', result);
  // return result;
};
const addUserFetch = async (values) => {
  // console.log(values, "values fetch");
  // const response = await fetch('/api/v1/games/', {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(values)
  // });
  // const result = await response.json();
  // console.log('fetch result add', result);
  // return result;
};

function* addTodoSagaWorker(action) {
  try {
    const todo = yield call(addTodoFetch, action.payload);
    if (todo) {
      yield put(addTodo(action.payload));
    }
  } catch (error) {
    yield put({ type: "ERROR", message: error.message });
  }
}

function* addUserSagaWorker(action) {
  try {
    const user = yield call(addUserFetch, action.payload);
    console.log(user);
    if (user) {
      yield put(addUser(user));
    }
  } catch (error) {
    yield put({ type: "ERROR", message: error.message });
  }
}

function* TodoSagaWatcher() {
  yield takeEvery(ADD_USER_SAGA, addUserSagaWorker);
  yield takeEvery(ADD_TODO_SAGA, addTodoSagaWorker);
}
export default TodoSagaWatcher;
