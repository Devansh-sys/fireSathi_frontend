import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InspectorCalendar from "./pages/InspectorCalendar";
import InspectionDetails from "./pages/InspectionDetails";

export default function AppInspector() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InspectorCalendar />} />
        <Route path="/inspection/:id" element={<InspectionDetails />} />
      </Routes>
    </Router>
  );
}
