import React, { useEffect, useReducer } from 'react';
import PropTypes from "prop-types";
import ParkSplash from "./ParkSplash";
import parkDirectoryReducer from './../reducers/park-directory-reducer';
import { getParkDirectoryFailure, getParkDirectorySuccess } from './../action/index';

// function ParkDetail(props) {
//   const { park } = props;

const intialState = {
  isLoaded: false,
  parkInfo: [],
  error: null
}

function ParkDetail() {
  
  const [state, dispatch] = useReducer(parkDirectoryReducer, intialState);

  useEffect(() => {
    fetch(`http://localhost:5000/api/parks/{id}`)
      .then(response => {
        if(!response.ok){
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
          const action = getParkDirectorySuccess(jsonifiedResponse)
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

// we need to somehow define park and remove parkInfo, probably

    <React.Fragment>
      <h1>Park Name: {park.name}</h1>
      <h2>Classification: {park.classification}</h2>
      <h2>Location: {park.location}</h2>
      <h2>Major Landmarks: {park.majorLandmarks}</h2>
      <h2>Activities available: {park.activities}</h2>
      <h2>Facilities: {park.facilities}</h2>
      <h2>Year Founded: {park.yearFounded}</h2>
    </React.Fragment>
  );
  }
}

// ParkDetail.propTypes = {
//   ParkSplash: PropTypes.object,

// }

export default ParkDetail;