import { ADD_TODO } from "../types";

export const todoReducer = (state=[], action) => {
  switch (action.type) {
        case ADD_TODO:
          return action.payload.todo;
    default:
      return state;
  }
};
