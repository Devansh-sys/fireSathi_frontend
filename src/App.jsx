// import { useState } from "react";

// const mockData = [
//   { id: 1, buildingNumber: "101A", applicant: "John Doe", status: "Pending" },
//   { id: 2, buildingNumber: "202B", applicant: "Jane Smith", status: "Approved" },
//   { id: 3, buildingNumber: "303C", applicant: "Alice Brown", status: "Pending" },
// ];

// export default function NOCDashboard() {
//   const [applications, setApplications] = useState(mockData);
//   const [search, setSearch] = useState("");

//   // Function to handle approval or rejection of an application
//   const handleApproval = (id, newStatus) => {
//     setApplications(
//       applications.map((app) =>
//         app.id === id ? { ...app, status: newStatus } : app
//       )
//     );
//   };

//   // Filter applications based on search input
//   const filteredApps = applications.filter((app) =>
//     app.applicant.toLowerCase().includes(search.toLowerCase()) ||
//     app.buildingNumber.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       {/* Header */}
//       <h1 className="text-2xl font-bold mb-4">NOC Officer Dashboard</h1>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search by applicant or building number"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       {/* Application Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredApps.map((app) => (
//           <div
//             key={app.id}
//             className="bg-white p-4 border rounded-lg shadow-md"
//           >
//             <p className="font-semibold"><strong>Building No:</strong> {app.buildingNumber}</p>
//             <p><strong>Applicant:</strong> {app.applicant}</p>
//             <p><strong>Status:</strong> {app.status}</p>

//             {/* Action Buttons for Pending Applications */}
//             {app.status === "Pending" && (
//               <div className="mt-4 flex gap-2">
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
//                   onClick={() => handleApproval(app.id, "Approved")}
//                 >
//                   Approve
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
//                   onClick={() => handleApproval(app.id, "Rejected")}
//                 >
//                   Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FPA from "./pages/FPA"; 
import FSC from "./pages/FSC";
import FireDepartmentList from "./pages/FireDepartmentList"; 
import InspectorDashboard from "./pages/InspectorDashboard";// Import the new page // Import the page// Import the Dashboard page
import ComplianceDashboard from "./pages/ComplianceDashboard"
import IssuedCertificates from "./pages/IssuedCertificates"
function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the Dashboard page */}
        <Route path="/fpa" element={<FPA />} />

        {/* Add more routes here if needed */}
        <Route path="/" element={<h1>Welcome to the App!</h1>} />

        <Route path="/fsc" element={<FSC />} />

        <Route path="/fireDepartment" element={<FireDepartmentList />} />
        <Route path="/inspectorPerformance" element={<InspectorDashboard />} /> 

        <Route path="/compliancePerformance" element={<ComplianceDashboard />} />

        <Route path="/issuedCertificates" element={<IssuedCertificates />} />
      </Routes>
    </Router>
  );
}

export default App;