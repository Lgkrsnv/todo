import {ADD_TODO, ADD_TODO_SAGA} from '../types'

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const addTodoSaga = (text, username) => ({
  type: ADD_TODO_SAGA,
  payload: {
    text,
    username
  }
})
