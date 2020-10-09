import {
  LOAD_OPTIONS_FAILURE,
  LOAD_OPTIONS_IN_PROGRESS,
  LOAD_OPTIONS_SUCCESS,
} from '../actions/option.action';

const initalState = {
  isLoading: false,
  optionData: [],
};

export default function option(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_OPTIONS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_OPTIONS_SUCCESS: {
      const { options } = payload;
      const joinedOptions = [...state.optionData, ...options];
      const newOptions = joinedOptions.filter(
        (option, index, array) => index === array.findIndex((o) => o._id === option._id)
      );
      return {
        ...state,
        optionData: newOptions,
        isLoading: false,
      };
    }
    case LOAD_OPTIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
