import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; 
import FPAApproval from "./pages/FPAApproval"; 
import ReportVerification from "./pages/ReportVerification"; 
import DocumentVerification from "./pages/DocumentVerification"; 


function AppCompliance() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fpa-approval" element={<FPAApproval />} />
        <Route path="/report-verification" element={<ReportVerification />} />
        <Route path="/document-verification" element={<DocumentVerification />} />
      </Routes>
    </Router>
  );
}

export default AppCompliance;
