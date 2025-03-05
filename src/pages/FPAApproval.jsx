// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function FPAApproval() {
  const generateFirePlans = () => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i + 1,
      building: `Building ${i + 1}`,
      image: "https://via.placeholder.com/100",
      status: "Pending",
      comments: ""
    }));
  };

  const [firePlans, setFirePlans] = useState(generateFirePlans());
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const entriesPerPage = 50;

  const updateStatus = (id, status) => {
    setFirePlans(prevPlans => 
      prevPlans.map(fp => 
        fp.id === id ? { ...fp, status } : fp
      )
    );
  };

  const filteredPlans = firePlans.filter(fp => 
    filter === "All" || fp.status === filter
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredPlans.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredPlans.length / entriesPerPage);

  return (
    <div className="p-8 bg-gray-100 min-h-screen overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">FPA Approval - Compliance Officer</h2>
      <div className="flex justify-center mb-6">
        <select 
          className="border p-3 rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <div className="overflow-y-auto max-h-[600px] bg-white shadow-xl rounded-lg p-6 smooth-scroll">
        <table className="w-full border rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4">Building</th>
              <th className="p-4">Fire Plan</th>
              <th className="p-4">Status</th>
              <th className="p-4">Comments</th>
              {filter === "All" && <th className="p-4">Approve</th>}
              {filter === "All" && <th className="p-4">Reject</th>}
            </tr>
          </thead>
          <tbody>
            {currentEntries.map(fp => (
              <tr key={fp.id} className="border-b text-center hover:bg-gray-100 odd:bg-gray-50">
                <td className="p-4 font-medium text-gray-700">{fp.building}</td>
                <td className="p-4">
                  <img src={fp.image} alt="Fire Plan" className="w-24 h-24 border rounded-lg shadow-sm" />
                </td>
                <td className={`p-4 font-bold ${fp.status === "Approved" ? "text-green-600" : fp.status === "Rejected" ? "text-red-600" : "text-gray-800"}`}>
                  {fp.status}
                </td>
                <td className="p-4">
                  <input
                    type="text"
                    className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    placeholder="Add comments..."
                    onChange={(e) => {
                      setFirePlans(firePlans.map(f => f.id === fp.id ? { ...f, comments: e.target.value } : f));
                    }}
                  />
                </td>
                {filter === "All" && (
                  <td className="p-4">
                    <button onClick={() => updateStatus(fp.id, "Approved")} className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all">Approve</button>
                  </td>
                )}
                {filter === "All" && (
                  <td className="p-4">
                    <button onClick={() => updateStatus(fp.id, "Rejected")} className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all">Reject</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className={`px-5 py-2 rounded-lg shadow-md ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 transition-all"}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-800 font-medium">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className={`px-5 py-2 rounded-lg shadow-md ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 transition-all"}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="p-8 bg-gray-200 min-h-screen">
//         <nav className="flex justify-center gap-8 bg-white p-4 shadow-lg rounded-lg mb-6">
//           <Link to="/" className="text-blue-700 font-bold text-lg hover:underline">FPA Approval</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<FPAApproval />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default FPAApproval;