import { DELETE_USER, CLEAN_TODOS } from "../types";

export const deleteUser = () => async (dispatch) => {
  const response = await fetch("/api/v1/users/logout", {
    credentials: 'include'
  });
  const result = await response.json();

  const action = {
    type: DELETE_USER,
  };
  const action2 = {
    type: CLEAN_TODOS,
  };
  if (result.status === "deleted") {
    dispatch(action);
    dispatch(action2);
  }
};
