import { ADD_USER, DELETE_USER } from "../types";

export const userReducer = (state={}, action) => {
  switch (action.type) {
        case ADD_USER:
          console.log('reducer signup', action.payload);
          return  { ...state, 
            isLogin: !state.isLogin,
            username: action.payload
        };

        case DELETE_USER:
          return  { 
            isLogin: false,
        };
    default:
      return state;
  }
};
