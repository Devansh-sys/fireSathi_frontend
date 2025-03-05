import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";

export default function ComplianceOfficerPortal() {
  const totalEntries = 200;
  const entriesPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);
  
  const generateReports = () => {
    return Array.from({ length: totalEntries }, (_, index) => ({
      id: index + 1,
      applicantId: `APP-${5000 + index}`,
      ownerName: `Owner ${index + 1}`,
      address: `Address ${index + 1}, City, State`,
      inspectorId: `INS-${1000 + index}`,
      title: `Inspection Report #${index + 1}`,
      details: "Inspector's report on standard inspection criteria.",
      imageUrl: `https://via.placeholder.com/150?text=Report+${index + 1}` 
    }));
  };

  const [reports] = useState(generateReports());
  const [selectedReport, setSelectedReport] = useState(null);
  const [complianceReport, setComplianceReport] = useState({ title: "", details: "", image: null });
  const [submitted, setSubmitted] = useState(false);

  const handleSelectReport = (report) => {
    setSelectedReport(report);
    setComplianceReport({ title: "", details: "", image: null });
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setComplianceReport({ ...complianceReport, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setComplianceReport((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = () => {
    if (complianceReport.title && complianceReport.details) {
      console.log("Compliance Report submitted:", complianceReport);
      setSubmitted(true);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedReports = reports.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-6">
      <Card className="w-full max-w-4xl p-6 shadow-2xl bg-white rounded-lg">
        <CardContent>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Compliance Officer Portal</h2>
          {!selectedReport ? (
            <>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Inspector Reports</h3>
              {paginatedReports.map((report) => (
                <div key={report.id} className="mb-4 p-4 border rounded-lg bg-gray-100 shadow-md">
                  <p className="text-sm text-gray-800"><strong>Applicant ID:</strong> {report.applicantId}</p>
                  <p className="text-sm text-gray-800"><strong>Owner:</strong> {report.ownerName}</p>
                  <p className="text-sm text-gray-800"><strong>Address:</strong> {report.address}</p>
                  <p className="text-sm text-gray-800"><strong>Inspector ID:</strong> {report.inspectorId}</p>
                  <img src={report.imageUrl} alt={`Report ${report.id}`} className="mb-2 w-full h-40 object-cover rounded-lg" />
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-800" onClick={() => handleSelectReport(report)}>
                    View Report
                  </Button>
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <Button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="bg-gray-600 text-white hover:bg-gray-800">
                  Previous
                </Button>
                <span className="text-gray-200">Page {currentPage} of {Math.ceil(totalEntries / entriesPerPage)}</span>
                <Button disabled={currentPage === Math.ceil(totalEntries / entriesPerPage)} onClick={() => handlePageChange(currentPage + 1)} className="bg-gray-600 text-white hover:bg-gray-800">
                  Next
                </Button>
              </div>
            </>
          ) :!submitted ? (
            <>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Inspector's Report</h3>
              <img src={selectedReport.imageUrl} alt={`Report ${selectedReport.id}`} className="mb-2 w-full h-48 object-cover rounded-lg" />
              <p className="text-sm text-gray-800 mb-2"><strong>{selectedReport.title}:</strong> {selectedReport.details}</p>
              <p className="text-sm text-gray-800 mb-2"><strong>Inspector ID:</strong> {selectedReport.inspectorId}</p>
              <Input
                name="title"
                placeholder="Compliance Report Title"
                value={complianceReport.title}
                onChange={handleChange}
                className="mb-2 border border-gray-400 rounded-lg p-2"
              />
              <Textarea
                name="details"
                placeholder="Compliance Report Details"
                value={complianceReport.details}
                onChange={handleChange}
                className="mb-2 border border-gray-400 rounded-lg p-2"
              />
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-2 border border-gray-400 rounded-lg p-2"
              />
              {complianceReport.image && (
                <img src={complianceReport.image} alt="Uploaded" className="mb-2 w-full h-48 object-cover rounded-lg" />
              )}
              <Button onClick={handleSubmit} className="w-full bg-green-600 text-white hover:bg-green-800">Submit Report</Button>
              
              {/* 🚀 Added Go Back Button */}
              <Button onClick={() => setSelectedReport(null)} className="w-full mt-2 bg-red-600 text-white hover:bg-red-800">
                Go Back
              </Button>
            </>
          ) : (
            <p className="text-green-600 text-lg font-semibold text-center">Compliance Report submitted successfully!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
