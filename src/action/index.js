import * as c from './ActionTypes';

export const getParkDirectorySuccess = (parkDirectory) => ({
  type: c.GET_PARK_DIRECTORY_SUCCESS,
  parkDirectory
});

export const getParkDirectoryFailure = (error) => ({
  type: c.GET_PARK_DIRECTORY_FAILURE,
  error
});