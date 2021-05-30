import { ADD_TODO, CLEAN_TODOS, SHOW_USER_TODOS } from "../types";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("reducer combine todo", action.payload.todo);
      return [...state, action.payload.todo];
      case SHOW_USER_TODOS:
        console.log(action.payload, 'act pay todos');
        return [...action.payload]
        case CLEAN_TODOS:
          return []
    default:
      return state;
  }
};
