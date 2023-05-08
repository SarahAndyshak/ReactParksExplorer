import * as c from './ActionTypes';

export const getParkDirectorySuccess = (parkInfo) => ({
  type: c.GET_PARK_DIRECTORY_SUCCESS,
  parkInfo: parkInfo
});

export const getParkDirectoryFailure = (error) => ({
  type: c.GET_PARK_DIRECTORY_FAILURE,
  error
});