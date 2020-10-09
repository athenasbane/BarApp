export const GET_AUTHED_IN_PROGRESS = 'GET_AUTHED_IN_PROGRESS';
export const getAuthedInProgress = () => ({
  type: GET_AUTHED_IN_PROGRESS,
});

export const GET_AUTHED_SUCCESS = 'GET_AUTHED_SUCCESS';
export const getAuthedSuccess = (user) => ({
  type: GET_AUTHED_SUCCESS,
  payload: { user },
});

export const GET_AUTHED_FAILURE = 'GET_AUTHED_FAILURE';
export const getAuthedFailure = () => ({
  type: GET_AUTHED_FAILURE,
});

export const LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS';
export const loginInProgress = () => ({
  type: LOGIN_IN_PROGRESS,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
