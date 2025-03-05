import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

import { Table, TableHeader, TableBody, TableRow, TableCell } from "../components/ui/table";

const applicants = [
  { id: "123456", name: "John Doe", date: "March 5, 2025" },
  { id: "654321", name: "Jane Smith", date: "March 4, 2025" },
  { id: "789012", name: "Alice Johnson", date: "March 3, 2025" },
];

const DocumentVerification = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [remarks, setRemarks] = useState("");

  const documents = [
    "Approval Letter & Approved Layout Plan",
    "Approval Letter & Approved Building Plan",
    "Building Fire Plans / Elevation Plan / Section Plan",
    "Ownership Document (Lease Deed / Registry / Khasra)",
    "Certificate of Fire Consultant Qualification",
    "53 Points Checklist",
  ];

  const handleVerify = () => {
    setVerificationStatus("Approved");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {!selectedApplicant ? (
        <Card className="shadow-lg rounded-2xl border border-gray-200 p-6 bg-white">
          <CardHeader className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Pending Applications</h2>
            <p className="text-gray-600">Select an application to verify</p>
          </CardHeader>
          <CardContent>
            <Table className="w-full mt-4 border border-gray-300 rounded-lg">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableCell className="font-semibold">Application ID</TableCell>
                  <TableCell className="font-semibold">Property Owner</TableCell>
                  <TableCell className="font-semibold">Submission Date</TableCell>
                  <TableCell className="font-semibold text-right">Action</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell className="text-gray-900 font-medium">{applicant.id}</TableCell>
                    <TableCell className="text-gray-900 font-medium">{applicant.name}</TableCell>
                    <TableCell className="text-gray-900 font-medium">{applicant.date}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => setSelectedApplicant(applicant)}
                      >
                        Verify
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-lg rounded-2xl border border-gray-200 p-6 bg-white">
          <CardHeader className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Document Verification</h2>
            <p className="text-gray-600">Review the documents and verify the application</p>
          </CardHeader>
          <CardContent>
            <Button className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600" onClick={() => setSelectedApplicant(null)}>
              Back
            </Button>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="font-medium text-gray-700">Application ID:</Label>
                <p className="text-gray-900 font-semibold">{selectedApplicant.id}</p>
              </div>
              <div>
                <Label className="font-medium text-gray-700">Property Owner Name:</Label>
                <p className="text-gray-900 font-semibold">{selectedApplicant.name}</p>
              </div>
              <div>
                <Label className="font-medium text-gray-700">Submission Date:</Label>
                <p className="text-gray-900 font-semibold">{selectedApplicant.date}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">Documents</h3>
              <Table className="w-full mt-4 border border-gray-300 rounded-lg">
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableCell className="font-semibold">Document Name</TableCell>
                    <TableCell className="font-semibold text-right">Action</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-gray-900 font-medium">{doc}</TableCell>
                      <TableCell className="text-right">
                        <Button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View PDF</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onClick={handleVerify}>
                Approve Application
              </Button>
              <Button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" onClick={() => setVerificationStatus("Rejected")}>
                Reject Application
              </Button>
            </div>
            {verificationStatus && (
              <div className="mt-6 p-4 border rounded-lg bg-gray-100 text-center">
                <p className={`font-semibold text-lg ${verificationStatus === "Approved" ? "text-green-600" : "text-red-600"}`}>
                  Status: {verificationStatus}
                </p>
                {verificationStatus === "Rejected" && (
                  <div className="mt-4">
                    <Label className="font-medium text-gray-700">Remarks:</Label>
                    <Textarea
                      className="border-gray-300 shadow-sm mt-2 w-full"
                      placeholder="Enter rejection remarks"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DocumentVerification;
