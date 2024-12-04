import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./Components/Home";
import CenterDiv from "./Components/CenterDiv";
import PrivateRoute from "./Components/PrivateRoute";
import LoginSignup from "./Components/LoginSignup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/superuser" element={<CenterDiv />} />
        <Route path="/" element={<LoginSignup />} />


        {/* Private Route */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Redirect to /superuser if no route matches */}
        <Route path="*" element={<Navigate to="/superuser" />} />
      </Routes>
    </Router>
  );
}

export default App;
