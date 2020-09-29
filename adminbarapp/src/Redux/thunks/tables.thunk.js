import {
    getTablesFailure,
    getTablesInProgress,
    getTablesSuccess
} from '../actions/table.action';

export const loadTables = () => async (dispatch, getState) => {

    dispatch(getTablesInProgress());

    try {

        let response = await fetch('http://localhost:4000/tables');
        let tables = response.json();
        dispatch(getTablesSuccess(tables));

    } catch (e) {
        dispatch(getTablesFailure());
    }
};