import React from 'react';
import './App.css';
import ParkSplash from './ParkSplash';
import ParkDetail from './ParkDetail';
import ParkControl from './ParkControl';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <React.Fragment>
    //   < ParkControl />
    //   {/* < ParkSplash /> */}
    //   {/* < ParkDetail /> */}
    // </React.Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<ParkControl />} />
        {/* <Route path="/parks" element={<ParkSplash />} />
        <Route path="/parks/:id" element={<ParkDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;