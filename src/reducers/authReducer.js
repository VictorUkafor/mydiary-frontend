import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_USER:
      return {
        ...state,
        authenticated: true,
        successMessage: action.payload,
      };
    case types.SIGNUP_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
