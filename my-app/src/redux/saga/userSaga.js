import { call, put, takeEvery } from "redux-saga/effects";
import { SIGNUP_USER_SAGA, LOGIN_USER_SAGA } from "../types";
import { addUser } from "../actionCreators/addUserAC";

const signupUserFetch = async (values) => {
  console.log(values, "values fetch");
  const response = await fetch('/api/v1/users/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values)
  });
  const result = await response.json();
  console.log('fetch result signup', result);
  return result;
};
const loginUserFetch = async (values) => {
  console.log(values, "values fetch");
  const response = await fetch('/api/v1/users/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values)
  });
  const result = await response.json();
  console.log('fetch result login', result, typeof result);
  if (result === 212) {
    return values.username;
  }
};


function* signupUserSagaWorker(action) {
  try {
    const user = yield call(signupUserFetch, action.payload);
    console.log(user, 'user worker signup');
    if (user) {
      yield put(addUser(user));
    }
  } catch (error) {
    yield put({ type: "ERROR", message: error.message });
  }
}
function* loginUserSagaWorker(action) {
  try {
    const user = yield call(loginUserFetch, action.payload);///
    console.log(user, 'user worker login');
    if (user) {
      yield put(addUser(user));
    }
  } catch (error) {
    yield put({ type: "ERROR", message: error.message });
  }
}

function* userSagaWatcher() {
  yield takeEvery(SIGNUP_USER_SAGA, signupUserSagaWorker);
  yield takeEvery(LOGIN_USER_SAGA, loginUserSagaWorker);
}
export default userSagaWatcher;
