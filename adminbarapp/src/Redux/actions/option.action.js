export const LOAD_OPTIONS_IN_PROGRESS = 'LOAD_OPTIONS_IN_PROGRESS';
export const loadOptionsInProgress = (id) => ({
  type: LOAD_OPTIONS_IN_PROGRESS,
  payload: { id },
});

export const LOAD_OPTIONS_SUCCESS = 'LOAD_OPTIONS_SUCCESS';
export const loadOptionsSuccess = (options) => ({
  type: LOAD_OPTIONS_SUCCESS,
  payload: { options },
});

export const LOAD_OPTIONS_FAILURE = 'LOAD_OPTIONS_FAILURE';
export const loadOptionsFailure = () => ({
  type: LOAD_OPTIONS_FAILURE,
});

export const UPDATE_OPTION = 'UPDATE_OPTION';
export const updateOption = (option) => ({
  type: UPDATE_OPTION,
  payload: { option },
});

export const REMOVE_OPTION = 'REMOVE_OPTION';
export const removeOption = (index) => ({
  type: REMOVE_OPTION,
  payload: { index },
});

export const SAVE_OPTION_IN_PROGRESS = 'SAVE_OPTION_IN_PROGRESS';
export const saveOptionInProgress = (option) => ({
  type: SAVE_OPTION_IN_PROGRESS,
  payload: { option },
});

export const SAVE_OPTION_SUCCESS = 'SAVE_OPTION_SUCCESS';
export const saveOptionSuccess = (option) => ({
  type: SAVE_OPTION_SUCCESS,
  payload: { option },
});

export const SAVE_OPTION_FAILURE = 'SAVE_OPTION_FAILURE';
export const saveOptionFailure = () => ({
  type: SAVE_OPTION_FAILURE,
});

export const DELETE_OPTION_IN_PROGRESS = 'DELETE_OPTION_IN_PROGRESS';
export const deleteOptionInProgress = () => ({
  type: 'DELETE_OPTION_IN_PROGRESS',
});

export const DELETE_OPTION_SUCCESS = 'DELETE_OPTION_SUCCESS';
export const deleteOptionSuccess = (id) => ({
  type: DELETE_OPTION_SUCCESS,
  payload: { id },
});

export const DELETE_OPTION_FAILURE = 'DELETE_OPTION_FAILURE';
export const deleteOptionFailure = () => ({
  type: DELETE_OPTION_FAILURE,
});

export const SAVE_UPDATED_OPTION_IN_PROGRESS = 'SAVE_UPDATED_OPTION_IN_PROGRESS';
export const saveUpdatedOptionInProgress = () => ({
  type: SAVE_UPDATED_OPTION_IN_PROGRESS,
});

export const SAVE_UPDATED_OPTION_SUCCESS = 'SAVE_UPDATED_OPTION_SUCCESS';
export const saveUpdateOptionSuccess = () => ({
  type: SAVE_UPDATED_OPTION_SUCCESS,
});

export const SAVE_UPDATED_OPTION_FAILURE = 'SAVE_UPDATED_OPTION_FAILURE';
export const saveUpdateOptionFailure = () => ({
  type: SAVE_UPDATED_OPTION_FAILURE,
});
