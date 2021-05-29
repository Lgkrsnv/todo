import {ADD_USER, ADD_USER_SAGA} from '../types'

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
})

export const addUserSaga = (values) => ({
  type: ADD_USER_SAGA,
  payload: values
})
