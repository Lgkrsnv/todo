import { DELETE_USER } from "../types";

export const deleteUser = () => async (dispatch) => {
  const response = await fetch("/api/v1/users/logout");
  const result = await response.json();

  const action = {
    type: DELETE_USER,
  };
  if (result.status === "deleted") {
    dispatch(action);
  }
};
