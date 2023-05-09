import React from 'react';
import './App.css';
import ParkSplash from './ParkSplash';
import ParkDetail from './ParkDetail';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <React.Fragment>
    //   < ParkControl />
    //   {/* < ParkSplash /> */}
    //   {/* < ParkDetail /> */}
    // </React.Fragment>
    // <Router>
      <Routes>
        <Route path="/" element={<ParkSplash />} />
        <Route path="/parks/:id" element={<ParkDetail />} />
      </Routes>
  );
}

export default App;