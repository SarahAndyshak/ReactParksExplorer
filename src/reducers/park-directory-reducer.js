import * as c from '../action/ActionTypes';

const parkDirectoryReducer = (state, action) => {
  switch (action.type) {
    case c.GET_PARK_DIRECTORY_SUCCESS:
      console.log("action: ", action);
      return {
        ...state,
        isLoaded: true,
        parkInfo: action.parkInfo // loads parkDirectory info from axn ;jsonified res
      };
    case c.GET_PARK_DIRECTORY_FAILURE:

    console.log("action Case2: ", action);
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