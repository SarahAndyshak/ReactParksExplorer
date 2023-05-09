import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function ParkDetail() {
  let { id } = useParams();
  const [parkState, setParkState] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [loadedState, setLoadedState] = useState(false);

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
        })
      .catch((error) => {
        setErrorState(error.message);
      });
    }, [])

    if (errorState) {
      return <h1>Error: {errorState}</h1>;
    } else if (!loadedState) {
      return <h1>...Loading...</h1>;
    } else {
      return (

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

export default ParkDetail;