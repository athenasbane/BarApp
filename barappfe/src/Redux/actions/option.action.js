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
