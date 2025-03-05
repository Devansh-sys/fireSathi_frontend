

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FPA from "./pages/FPA";
import FSC from "./pages/FSC";
import Dashboard from "./pages/NOCDashboard";
import FireDepartmentList from "./pages/FireDepartmentList";
import InspectorDashboard from "./pages/InspectorCalendar";// Import the new page // Import the page// Import the Dashboard page
import ComplianceDashboard from "./pages/ComplianceDashboard"
import IssuedCertificates from "./pages/IssuedCertificates"
import UserSignupPage from "./pages/UserSignupPage"
import UserLoginPage from "./pages/UserLoginPage"
import OfficerLoginPage from "./pages/OfficerLoginPage"
// import HomePage from "./pages/HomePage"
function AppNOC() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the Dashboard page */}

        <Route path="/fpa" element={<FPA />} />

        {/* Add more routes here if needed */}
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<OfficerLoginPage />} /> */}

        <Route path="/fsc" element={<FSC />} />

        <Route path="/fireDepartment" element={<FireDepartmentList />} />
        <Route path="/inspectorPerformance" element={<InspectorDashboard />} />

        <Route path="/compliancePerformance" element={<ComplianceDashboard />} />

        <Route path="/issuedCertificates" element={<IssuedCertificates />} />
      </Routes>
    </Router>
  );
}

export default AppNOC;