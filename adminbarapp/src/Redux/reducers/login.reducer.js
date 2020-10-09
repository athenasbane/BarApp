import {
  GET_AUTHED_FAILURE,
  GET_AUTHED_IN_PROGRESS,
  GET_AUTHED_SUCCESS,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/login.action';

const initalState = {
  isLoading: false,
  token: '',
  authed: false,
  email: '',
};

export default function login(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AUTHED_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_AUTHED_SUCCESS: {
      const { user } = payload;
      const token = localStorage.getItem('token');
      return {
        ...state,
        email: user.user.email,
        authed: true,
        token,
        isLoading: false,
      };
    }
    case GET_AUTHED_FAILURE: {
      localStorage.removeItem('token');

      return {
        ...state,
        isLoading: false,
      };
    }
    case LOGIN_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      const { user } = payload;

      return {
        ...state,
        authed: true,
        token: user.token,
        email: user.user.email,
        isLoading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
