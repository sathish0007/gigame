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
export const fetchUrlSuccess = url => {
  console.log("object");
  return {
    type: actionTypes.FETCH_URL_SUCCESS,
    url
  };
};

export const fetchData = () => async dispatch => {
  dispatch(fetchUserStart());
  try {
    let url = "https://www.storenvy.com/search/products.json?category=mens";
    let data = await axios.get(url);
    console.log(data);
    dispatch(fetchUserSuccess(data.data.products));
    dispatch(fetchUrlSuccess(url));
  } catch (err) {
    console.log(err);
  }
};
export const filteredData = url => async dispatch => {
  dispatch(fetchUserStart());
  try {
    let data = await axios.get(url);
    console.log(data);
    dispatch(fetchUserSuccess(data.data.products));
  } catch (err) {
    console.log(err);
  }
};
export const categoryData = url => async dispatch => {
  dispatch(fetchUserStart());
  try {
    let data = await axios.get(url);
    console.log(data);
    dispatch(fetchUserSuccess(data.data.products));
    dispatch(fetchUrlSuccess(url));
  } catch (err) {
    console.log(err);
  }
};
