import {ADD_USER, SIGNUP_USER_SAGA, LOGIN_USER_SAGA} from '../types'

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
})

export const signupUserSaga = (values) => ({
  type: SIGNUP_USER_SAGA,
  payload: values
})

export const loginUserSaga = (values) => ({
  type: LOGIN_USER_SAGA,
  payload: values
})
