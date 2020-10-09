import {
  GET_TABLES_IN_PROGRESS,
  GET_TABLES_SUCCESS,
  GET_TABLES_FAILURE,
  SET_TABLES_IN_PROGRESS,
  SET_TABLES_SUCCESS,
  SET_TABLES_FAILURE,
  UPDATE_TABLE_IN_PROGRESS,
  UPDATE_TABLE_SUCCESS,
  UPDATE_TABLE_FAILURE,
} from '../actions/table.action';

const initalState = {
  isLoading: false,
  tableData: [],
};

export default function tables(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TABLES_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_TABLES_SUCCESS: {
      const { tables } = payload;
      return {
        tableData: [...tables],
        isLoading: false,
      };
    }
    case GET_TABLES_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_TABLES_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_TABLES_SUCCESS: {
      const { tableList } = payload;
      return {
        tableData: [...tableList],
        isLoading: false,
      };
    }
    case SET_TABLES_FAILURE: {
      return {
        isLoading: false,
        ...state,
      };
    }
    case UPDATE_TABLE_IN_PROGRESS: {
      return {
        isLoading: true,
        ...state,
      };
    }
    case UPDATE_TABLE_SUCCESS: {
      const { updatedTable } = payload;
      console.log('[REDUCER] ', updatedTable);
      return {
        isLoading: false,
        tableData: state.tableData.map((table) => {
          if (table._id === updatedTable._id) {
            console.log('[REDUCER FILTERED] ', table);
            return updatedTable;
          }
          return table;
        }),
      };
    }
    case UPDATE_TABLE_FAILURE: {
      return {
        isLoading: false,
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
