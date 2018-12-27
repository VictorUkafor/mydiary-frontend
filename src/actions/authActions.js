import axios from 'axios';
import * as types from './actionTypes';

export const signupUser = (body, callback) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/signup', body);
    dispatch({
      type: types.SIGNUP_USER,
      payload: response.data.success,
    });
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNUP_USER_ERROR,
      payload: error.response.data.errors,
    });
  }
};


export const loginUser = (body, callback) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/login', body);
    dispatch({
      type: types.LOGIN_USER,
      payload: response.data.success,
    });
    callback();
  } catch (error) {
    dispatch({
      type: types.LOGIN_USER_ERROR,
      payload: error.response.data.errors,
    });
  }
};
