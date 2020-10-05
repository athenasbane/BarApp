import {
    getTablesFailure,
    getTablesInProgress,
    getTablesSuccess,
    setTablesFailure,
    setTablesInProgress,
    setTablesSuccess,
    updateTableInProgress,
    updateTableSuccess,
    updateTableFailure,
} from '../actions/table.action';

import { url } from '../../constants';

export const loadTables = () => async (dispatch, getState) => {
    dispatch(getTablesInProgress());
    try {
        let response = await fetch(url + '/tables');
        let tables = await response.json();
        dispatch(getTablesSuccess(tables));
    } catch (e) {
        dispatch(getTablesFailure());
    }
};

export const setTables = number => async (dispatch, getState) => {
    dispatch(setTablesInProgress());
    try {
        const newList = [];
        for( let i = 0; i < number; i++ ) {
            newList.push({
                tableNum: i + 1,
                tableActive: true
            });
        }
        let response = await fetch(url + '/tables/set', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().login.token}`,
            },
            body: JSON.stringify(newList)
        });
        let tables = await response.json();
        dispatch(setTablesSuccess(tables));
    } catch (e) {
        dispatch(setTablesFailure());
    }
};

export const updateTable = id => async (dispatch, getState) => {
    dispatch(updateTableInProgress());
    let table = getState()
        .tables.tableData.filter(table => table._id === id);
    table = {
        ...table[0],
        tableActive: !table[0].tableActive
    };
    console.log('[THUNK PRE FETCH] ', table)
    try {
        let response = await fetch(url + `/tables/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getState().login.token}`,
            },
            body: JSON.stringify(table)
        });
        let updatedTable = await response.json();
        console.log('[THUNK POST FETCH] ', updatedTable)
        dispatch(updateTableSuccess(updatedTable));

    } catch (e) {
        console.log(e)
        dispatch(updateTableFailure())
    }
};