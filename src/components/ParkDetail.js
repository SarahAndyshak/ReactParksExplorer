import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import ParkSplash from "./ParkSplash";
import parkDirectoryReducer from './../reducers/park-directory-reducer';
import { getParkDirectoryFailure, getParkDirectorySuccess } from './../action/index';
import {Routes, Route, useParams} from 'react-router-dom';

// function ParkDetail(props) {
//   const { park } = props;

// const intialState = {
//   isLoaded: false,
//   parkInfo: [],
//   error: null
// }

function ParkDetail() {
  let { id } = useParams();
  const [parkState, setParkState] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [loadedState, setLoadedState] = useState(false);
  // const [state, dispatch] = useReducer(parkDirectoryReducer, intialState);



  useEffect(() => {
    fetch(`http://localhost:5000/api/parks/${id}`)
      .then(response => {
        if(!response.ok){
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
          setParkState(jsonifiedResponse);
          setLoadedState(true);
          // const action = getParkDirectorySuccess(jsonifiedResponse)
          // dispatch(action);
        })
      .catch((error) => {
        // setParkState(error.message);
        setErrorState(error.message);
        // const action = getParkDirectoryFailure(error.message)
        // dispatch(action);
      });
    }, [])

    // const { error, isLoaded, parkInfo } = state;

    if (errorState) {
      return <h1>Error: {errorState}</h1>;
    } else if (!loadedState) {
      return <h1>...Loading...</h1>;
    } else {
      return (

// we need to somehow define park and remove parkInfo, probably

    <React.Fragment>
      <h1>Park Name: {parkState.name}</h1>
      <h2>Classification: {parkState.classification}</h2>
      <h2>Location: {parkState.location}</h2>
      <h2>Major Landmarks: {parkState.majorLandmarks}</h2>
      <h2>Activities available: {parkState.activities}</h2>
      <h2>Facilities: {parkState.facilities}</h2>
      <h2>Year Founded: {parkState.yearFounded}</h2>
    </React.Fragment>
  );
  }
}

// ParkDetail.propTypes = {
//   ParkSplash: PropTypes.object,

// }

export default ParkDetail;