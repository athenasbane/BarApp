import {
  loadOptionsFailure,
  loadOptionsSuccess,
  loadOptionsInProgress,
} from '../actions/option.action';
import { url } from '../../constants';

export const loadOptions = (id) => async (dispatch, getState) => {
  dispatch(loadOptionsInProgress());
  try {
    const response = await fetch(`${url}/menu/${id}/option`);
    const data = await response.json();

    dispatch(loadOptionsSuccess(data));
  } catch (e) {
    console.log(e);
    dispatch(loadOptionsFailure());
  }
};
