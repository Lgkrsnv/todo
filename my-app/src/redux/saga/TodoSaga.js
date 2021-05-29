import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_TODO_SAGA } from "../types";
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


function* TodoSagaWatcher() {
  yield takeEvery(ADD_TODO_SAGA, addTodoSagaWorker);
}
export default TodoSagaWatcher;
