import {
  LOAD_OPTIONS_FAILURE,
  LOAD_OPTIONS_IN_PROGRESS,
  LOAD_OPTIONS_SUCCESS,
  UPDATE_OPTION,
  SAVE_OPTION_IN_PROGRESS,
  SAVE_OPTION_SUCCESS,
  SAVE_OPTION_FAILURE,
  DELETE_OPTION_IN_PROGRESS,
  DELETE_OPTION_SUCCESS,
  DELETE_OPTION_FAILURE,
  SAVE_UPDATED_OPTION_IN_PROGRESS,
  SAVE_UPDATED_OPTION_SUCCESS,
  SAVE_UPDATED_OPTION_FAILURE,
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
    case SAVE_OPTION_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SAVE_OPTION_SUCCESS: {
      const { option } = payload;
      return {
        ...state,
        optionData: [...state.optionData, option],
      };
    }
    case SAVE_OPTION_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UPDATE_OPTION: {
      const { option: optionToUpdate } = payload;
      return {
        ...state,
        optionData: state.optionData.map((option) => {
          if (option._id === optionToUpdate.id) {
            return {
              ...option,
              [optionToUpdate.name]: optionToUpdate.value,
            };
          }
          return option;
        }),
      };
    }
    case DELETE_OPTION_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_OPTION_SUCCESS: {
      const { id } = payload;
      return {
        ...state,
        isLoading: false,
        optionData: state.optionData.filter((option) => option._id !== id),
      };
    }
    case DELETE_OPTION_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SAVE_UPDATED_OPTION_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SAVE_UPDATED_OPTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SAVE_UPDATED_OPTION_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
