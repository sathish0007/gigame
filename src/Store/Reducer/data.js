import * as actionTypes from "../Action/types";

let initialState = {
  data: [],
  url: ""
};

export const fetchUserStart = (state, action) => {
  console.log(`i am reducer fetchUserStart`);
  return {
    ...state
  };
};

export const fetchUserSuccess = (state, action) => {
  console.log(`i am reducer succes`);
  return {
    ...state,
    data: action.data
  };
};
export const fetchUrlSuccess = (state, action) => {
  console.log(`i am reducer url`);
  return {
    ...state,
    url: action.url
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      console.log(`i am reducer`);
      return fetchUserStart(state, action);
    case actionTypes.FETCH_USER_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.FETCH_URL_SUCCESS:
      return fetchUrlSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
