import { getTablesFailure, getTablesInProgress, getTablesSuccess } from '../actions/table.action';
import { url } from '../../constants';

export const loadTables = () => async (dispatch, getState) => {
  dispatch(getTablesInProgress());
  try {
    const response = await fetch(`${url}/tables`);
    const tables = await response.json();
    dispatch(getTablesSuccess(tables));
  } catch (e) {
    dispatch(getTablesFailure());
  }
};
