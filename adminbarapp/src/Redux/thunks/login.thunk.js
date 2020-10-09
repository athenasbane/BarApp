import {
  getAuthedInProgress,
  getAuthedSuccess,
  getAuthedFailure,
  loginInProgress,
  loginSuccess,
  loginFailure,
} from '../actions/login.action';
import { url } from '../../constants';

export const getAuthed = (token) => async (dispatch) => {
  dispatch(getAuthedInProgress());

  try {
    const response = await fetch(`${url}/user/auth`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    const user = await response.json();

    dispatch(getAuthedSuccess(user));
  } catch (e) {
    dispatch(getAuthedFailure());
  }
};

export const login = (formData) => async (dispatch) => {
  dispatch(loginInProgress());

  try {
    const response = await fetch(`${url}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });

    const user = await response.json();

    dispatch(loginSuccess(user));
  } catch (e) {
    console.log('Failed Login');
    dispatch(loginFailure());
  }
};
