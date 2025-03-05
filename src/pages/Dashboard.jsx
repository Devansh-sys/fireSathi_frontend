import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Route, Routes, Link } from "react-router-dom";

const data = [
  { name: "FPA Approval", pending: 5, approved: 20 },
  { name: "Report Verification", pending: 8, verified: 15 },
  { name: "Document Verification", pending: 4, verified: 25 },
];

const pieData = [
  { name: "Pending", value: 17 },
  { name: "Approved/Verified", value: 60 },
];

const COLORS = ["#f59e0b", "#10b981"];

function FpaApproval() {
  return <div>FPA Approval Content</div>;
}

function ReportVerification() {
  return <div>Report Verification Content</div>;
}

function DocumentVerification() {
  return <div>Document Verification Content</div>;
}


export default function ComplianceDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full bg-white shadow-2xl w-72 p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Compliance Officer</h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/fpa-approval">FPA Approval</Link>
          </li>
          <li className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/report-verification">Report Verification</Link>
          </li>
          <li className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/document-verification">Document Verification</Link>
          </li>
        
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-72">
        <h1 className="text-3xl font-bold text-gray-800">Compliance Dashboard</h1>

        {/* Routing content based on selected page */}
        <Routes>
          <Route path="/fpa-approval" element={<FpaApproval />} />
          <Route path="/report-verification" element={<ReportVerification />} />
          <Route path="/document-verification" element={<DocumentVerification />} />
          
          <Route exact path="/" element={
            <>
              {/* Default Dashboard View */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {data.map((item, index) => (
                  <div key={index} className="bg-white p-6 shadow-lg rounded-xl h-52 overflow-auto border-l-4 border-blue-500">
                    <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
                    <p className="mt-2 text-gray-600">Pending: <span className="font-bold">{item.pending}</span></p>
                    <p className="text-gray-600">Approved/Verified: <span className="font-bold">{item.approved || item.verified}</span></p>
                  </div>
                ))}
              </div>

              {/* Graph Section */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 shadow-lg rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-700">Compliance Overview (Bar Chart)</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                      <Bar dataKey="approved" fill="#10b981" name="Approved/Verified" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-700">Compliance Distribution (Pie Chart)</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}
