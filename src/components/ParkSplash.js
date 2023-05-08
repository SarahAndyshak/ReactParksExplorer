import React, { useEffect, useReducer } from 'react';
import parkDirectoryReducer from './../reducers/park-directory-reducer';
import { getParkDirectoryFailure, getParkDirectorySuccess } from './../action/index';

const intialState = {
  isLoaded: false,
  parkInfo: [],
  error: null
}

function ParkSplash() {
  const [state, dispatch] = useReducer(parkDirectoryReducer, intialState);

  useEffect(() => {
    fetch(`http://localhost:5000/api/parks`)
      .then(response => {
        if(!response.ok){
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
          const action = getParkDirectorySuccess(jsonifiedResponse.results)
          dispatch(action);
        })
      .catch((error) => {
        const action = getParkDirectoryFailure(error.message)
        dispatch(action);
      });
    }, [])
  
  const { error, isLoaded, parkInfo } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Park Info</h1>
        <ul>
          {parkInfo.map((park, index) =>
          <li key={index}>
            <h3>{park.name}</h3>
            <p>{park.location}</p>
          </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default ParkSplash;