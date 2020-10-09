import {
  loadOptionsFailure,
  loadOptionsSuccess,
  loadOptionsInProgress,
  saveOptionInProgress,
  saveOptionFailure,
  saveOptionSuccess,
  deleteOptionInProgress,
  deleteOptionSuccess,
  deleteOptionFailure,
  saveUpdatedOptionInProgress,
  saveUpdateOptionFailure,
} from '../actions/option.action';

import { url } from '../../constants';

export const loadOptions = (id) => async (dispatch) => {
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

export const updateDBOption = (option) => async (dispatch, getState) => {
  dispatch(saveUpdatedOptionInProgress());
  console.log(option);
  try {
    await fetch(`${url}/menu/option/${option._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().login.token}`,
      },
      body: JSON.stringify({ option }),
    });
  } catch (e) {
    dispatch(saveUpdateOptionFailure());
  }
};

export const saveNewOption = (id, option) => async (dispatch, getState) => {
  dispatch(saveOptionInProgress());

  try {
    const response = await fetch(`${url}/menu/option/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().login.token}`,
      },
      body: JSON.stringify({ option }),
    });
    const data = await response.json();

    dispatch(saveOptionSuccess(data));
  } catch (e) {
    dispatch(saveOptionFailure());
  }
};

export const deleteOption = (id) => async (dispatch, getState) => {
  dispatch(deleteOptionInProgress());
  try {
    await fetch(`${url}/menu/option/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getState().login.token}`,
      },
    });
    dispatch(deleteOptionSuccess(id));
  } catch (e) {
    dispatch(deleteOptionFailure());
  }
};
