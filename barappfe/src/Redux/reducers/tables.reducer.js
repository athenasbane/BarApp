import {
  GET_TABLES_IN_PROGRESS,
  GET_TABLES_SUCCESS,
  GET_TABLES_FAILURE,
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
    default: {
      return {
        ...state,
      };
    }
  }
}
