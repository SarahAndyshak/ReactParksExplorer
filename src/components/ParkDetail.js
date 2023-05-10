import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';

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
      <h3>Classification: {parkState.classification}</h3>
      <h3>Location: {parkState.location}</h3>
      <h3>Major Landmarks: {parkState.majorLandmarks}</h3>
      <h3>Activities available: {parkState.activities}</h3>
      <h3>Facilities: {parkState.facilities}</h3>
      <h3>Year Founded: {parkState.yearFounded}</h3>
      <br/>
      <Link to={`/`}>Back Home</Link>
    </React.Fragment>
  );
  }
}

export default ParkDetail;