import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    Chip,
} from "@mui/material";

// Mock data for demonstration
const mockData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    building: `Building ${i + 1}`,
    name: ["Aarav Kumar", "Priya Gupta", "Rohan Mehta", "Sanya Verma", "Kunal Das"][i % 5],
    status: i % 2 === 0 ? "Pending" : "Approved",
    date: `02-${(i % 28) + 1}-2024`,
}));

const FPA = () => {
    const [requests, setRequests] = useState([]);

    // Simulating API call on component mount
    useEffect(() => {
        setRequests(mockData);
    }, []);

    // Function to disapprove a request
    const disapproveRequest = async (id) => {
        try {
            // Simulate DELETE API call to backend
            await fetch(`/api/fire-noc/${id}`, { method: "DELETE" });

            // Remove the request from the frontend after successful deletion
            setRequests(requests.filter((req) => req.id !== id));
        } catch (error) {
            console.error("Error disapproving request:", error);
            alert("Failed to disapprove request. Check backend API.");
        }
    };

    return (
        <Box className="min-h-screen bg-gray-100 p-5 overflow-auto h-screen">
            {/* Header */}
            <Typography variant="h4" align="center" className="mb-5">
                Fire NOC Issuance Dashboard
            </Typography>

            {/* Pending and Approved Requests Grid */}
            <Grid container spacing={4}>
                {/* Pending Requests Column */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className="mb-3">
                        Pending Requests
                    </Typography>
                    <Box className="overflow-y-auto max-h-[70vh] pr-2">
                        {requests
                            .filter((req) => req.status === "Pending")
                            .map((req) => (
                                <RequestCard key={req.id} request={req} />
                            ))}
                    </Box>
                </Grid>

                {/* Approved Requests Column */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className="mb-3">
                        Approved Requests
                    </Typography>
                    <Box className="overflow-y-auto max-h-[70vh] pr-2">
                        {requests
                            .filter((req) => req.status === "Approved")
                            .map((req) => (
                                <RequestCard
                                    key={req.id}
                                    request={req}
                                    disapproveRequest={disapproveRequest}
                                />
                            ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

// Request Card Component
const RequestCard = ({ request, disapproveRequest }) => {
    return (
        <Card className="mb-4 shadow-md">
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {/* Left Section */}
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {request.building}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {request.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {request.date}
                        </Typography>
                    </Box>

                    {/* Right Section */}
                    <Box display="flex" alignItems="center" gap={2}>
                        {/* Status Chip */}
                        <Chip
                            label={request.status}
                            size="small"
                            color={request.status === "Pending" ? "warning" : "success"}
                        />

                        {/* Disapprove Button */}
                        {request.status === "Approved" && (
                            <Button
                                variant="contained"
                                color="error"
                                size="small"
                                onClick={() => disapproveRequest(request.id)}
                            >
                                Disapprove
                            </Button>
                        )}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default FPA; // Export the Dashboard component