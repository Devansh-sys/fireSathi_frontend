import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Dummy data for demonstration
const dummyData = {
    complianceOfficers: Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        name: `Officer ${i + 1}`,
        designation: "Compliance Officer",
        department: ["Fire Safety", "Building Inspections", "Emergency Planning", "Fire Prevention", "Hazard Assessment"][i % 5],
        email: `officer${i + 1}@example.com`,
        phone: `123-456-78${(i + 1) % 10}${(i + 3) % 10}`
    })),
    inspectors: Array.from({ length: 40 }, (_, i) => ({
        id: i + 41,
        name: `Inspector ${i + 1}`,
        designation: "Inspector",
        department: ["Fire Inspections", "Safety Compliance", "Equipment Check", "Building Code Compliance", "Fire Extinguisher Maintenance"][i % 5],
        email: `inspector${i + 1}@example.com`,
        phone: `555-123-45${(i + 2) % 10}${(i + 4) % 10}`
    }))
};

const FireDepartmentList = () => {
    const [view, setView] = useState("complianceOfficers");
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <Box className="p-6 min-h-screen bg-gray-100">
            {/* Header */}
            <Box className="flex justify-between items-center mb-4">
                <Typography variant="h4" fontWeight="bold">
                    Fire Department Officers
                </Typography>

                {/* Toggle Buttons */}
                <Box className="flex items-center gap-2">
                    <Button
                        variant={view === "complianceOfficers" ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setView("complianceOfficers")}
                    >
                        Compliance Officers
                    </Button>
                    <Button
                        variant={view === "inspectors" ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setView("inspectors")}
                    >
                        Inspectors
                    </Button>
                </Box>
            </Box>

            {/* Data fetched from backend here */}
            <Grid container spacing={4}>
                {dummyData[view].map((person) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={person.id}>
                        <Paper
                            className="p-4 shadow-md rounded-lg cursor-pointer"
                            onClick={() =>
                                person.designation === "Compliance Officer"
                                    ? navigate("/compliancePerformance")
                                    : navigate("/inspectorPerformance")
                            }
                        >
                            <Typography variant="h6" fontWeight="bold">
                                {person.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {person.designation}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {person.department}
                            </Typography>
                            <Typography variant="body2" className="mt-2">
                                📧 {person.email}
                            </Typography>
                            <Typography variant="body2">
                                📞 {person.phone}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FireDepartmentList;