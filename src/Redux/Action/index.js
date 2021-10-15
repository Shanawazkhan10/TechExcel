import { ADD_FAV, DELETE_FAV, UPDATE_FAV } from "./Type";
import axios from "axios";
export const addFav = (message) => ({
  type: ADD_FAV,
  message,
});
export const deleteFav = (id) => ({
  type: DELETE_FAV,
  id,
});
export const updateFav = ({ id, message }) => ({
  type: UPDATE_FAV,
  id,
  message,
});
export const fetchUsersRequest = () => {
  return { type: FETCH_USERS_REQUEST };
};
export const fetchUsersSuccess = (DataTable) => {
  return { type: FETCH_USERS_REQUEST, payload: DataTable };
};
export const fetchUsersFailure = (ErrMsg) => {
  return { type: FETCH_USERS_FAILURE, payload: ErrMsg };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .post("http://localhost:3001/createData")
      .then((response) => {
        const DataTable = response.data;
        dispatch(fetchUsersSuccess(DataTable));
      })
      .catch((err) => {
        const ErrMsg = err.message;
      });
  };
};
// axios
//       .post<TUserList>("http://localhost:3001/createData")
//       .then((response) => {
//         console.log(response.data.length);
//         if (response.data.length !== undefined) {
//           setTradeDetails(response.data);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
