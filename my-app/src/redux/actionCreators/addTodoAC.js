import {ADD_TODO, ADD_TODO_SAGA} from '../types'

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const addTodoSaga = (values) => ({
  type: ADD_TODO_SAGA,
  payload: values
})
