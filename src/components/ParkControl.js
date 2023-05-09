import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ParkSplash from "./ParkSplash";
import ParkDetail from "./ParkDetail";

  // click on name of park and be taken to park details
  // button needed
  // no delete, no edit at this point
  // switching between park splash and park detail

function ParkControl() {

  return(
    <>
      <Route path="/parks" element={<ParkSplash />} />
      <Route path="/parks/:id" element={<ParkDetail />} />
    </>
  );
}

export default ParkControl;