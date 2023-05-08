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

  console.log("state : ", state);
  useEffect(() => {
    fetch(`http://localhost:5000/api/parks`)
      .then(response => {
        // console.log("respons json: ", response.json()) // info pending in promise 
        if(!response.ok){
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          // console.log("respons: ", response()) // action res
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
         console.log("jsonifiedResponse: ", jsonifiedResponse);
          const action = getParkDirectorySuccess(jsonifiedResponse)//.results
         console.log("action: ", action);
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
          {console.log("parkInfo: ", parkInfo)}
          {parkInfo.map((park, parkId) =>
          <li key={parkId}>
            {console.log("park: ", park)}
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