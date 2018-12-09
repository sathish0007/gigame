import * as actionTypes from "./types";
import axios from "axios";

export const fetchUserStart = () => {
  console.log(`i am action fetchUserStart `);
  return {
    type: actionTypes.FETCH_USER_START
  };
};

export const fetchUserSuccess = data => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    data
  };
};

export const fetchData = () => async dispatch => {
  dispatch(fetchUserStart());
  try {
    let data = await axios.get("https://www.storenvy.com/search/products.json");
    console.log(data);
    dispatch(fetchUserSuccess(data.data.products));
  } catch (err) {
    console.log(err);
  }
};
