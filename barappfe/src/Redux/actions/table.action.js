export const GET_TABLES_IN_PROGRESS = 'GET_TABLES_IN_PROGRESS';
export const getTablesInProgress = () => ({
  type: GET_TABLES_IN_PROGRESS,
});

export const GET_TABLES_SUCCESS = 'GET_TABLES_SUCCESS';
export const getTablesSuccess = (tables) => ({
  type: GET_TABLES_SUCCESS,
  payload: { tables },
});

export const GET_TABLES_FAILURE = 'GET_TABLES_FAILURE';
export const getTablesFailure = () => ({
  type: GET_TABLES_FAILURE,
});
