import * as c from '../action/ActionTypes';

const parkDirectoryReducer = (state, action) => {
  switch (action.type) {
    case c.GET_PARK_DIRECTORY_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        parkDirectory: action.parkDirectory
      };
    case c.GET_PARK_DIRECTORY_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
};

export default parkDirectoryReducer;