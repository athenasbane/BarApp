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

export const SET_TABLES_IN_PROGRESS = 'SET_TABLES_IN_PROGRESS';
export const setTablesInProgress = () => ({
  type: SET_TABLES_IN_PROGRESS,
});

export const SET_TABLES_SUCCESS = 'SET_TABLES_SUCCESS';
export const setTablesSuccess = (tableList) => ({
  type: SET_TABLES_SUCCESS,
  payload: { tableList },
});

export const SET_TABLES_FAILURE = 'SET_TABLES_FAILURE';
export const setTablesFailure = () => ({
  type: SET_TABLES_FAILURE,
});

export const UPDATE_TABLE_IN_PROGRESS = 'UPDATE_TABLE_IN_PROGRESS';
export const updateTableInProgress = () => ({
  type: UPDATE_TABLE_IN_PROGRESS,
});

export const UPDATE_TABLE_SUCCESS = 'UPDATE_TABLE_SUCCESS';
export const updateTableSuccess = (updatedTable) => ({
  type: UPDATE_TABLE_SUCCESS,
  payload: { updatedTable },
});

export const UPDATE_TABLE_FAILURE = 'UPDATE_TABLE_FAILURE';
export const updateTableFailure = () => ({
  type: UPDATE_TABLE_FAILURE,
});
