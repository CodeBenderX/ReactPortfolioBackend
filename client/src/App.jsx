//File Name: ReactPortfolio 
//Student’s Name: Angelo Tiquio 
//StudentID: 301343280
//Date: September 21, 2024

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "../components/MainRouter";

/* 
  =============================
  JavaScript Functions Section
  =============================
*/

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;
