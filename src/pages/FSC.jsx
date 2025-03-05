import MainLayout from "../MainLayout";
import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Chip,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FSC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const dummyData = Array.from({ length: 50 }, (_, index) => ({
            id: `#${12345 + index}`,
            owner: `Owner ${index + 1}`,
            contact: `98765432${index % 10}`,
            address: `Address ${index + 1}, City, Country`,
            status: index % 3 === 0 ? "Approved" : index % 3 === 1 ? "Pending" : "Rejected",
            date: `2025-03-${(index % 30) + 1}`,
            avatar: "https://via.placeholder.com/40",
        }));
        setApplications(dummyData);
    }, []);

    const filteredApplications = applications.filter((app) =>
        app.owner.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <MainLayout>
            <Box>
                <Box className="p-6 bg-gray-100 min-h-screen">
                    <Paper className="max-w-100vw mx-auto p-4 shadow-md rounded-lg">
                        {/* Header */}
                        <Box className="flex justify-between items-center mb-4">
                            <Typography variant="h5" fontWeight="bold">
                                Fire NOC Applications
                            </Typography>
                            <TextField
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                size="small"
                                sx={{ width: "250px" }}
                            />
                        </Box>

                        {/* Table */}
                        <TableContainer component={Paper} className="max-h-[70vh] overflow-y-auto">
                            <Table stickyHeader aria-label="applications table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Owner</TableCell>
                                        <TableCell>Contact</TableCell>
                                        <TableCell>Address</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredApplications.map((app, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{app.id}</TableCell>
                                            <TableCell>
                                                <Box display="flex" alignItems="center" gap={1}>
                                                    <Avatar src={app.avatar} alt="Avatar" />
                                                    {app.owner}
                                                </Box>
                                            </TableCell>
                                            <TableCell>{app.contact}</TableCell>
                                            <TableCell>{app.address}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={app.status}
                                                    size="small"
                                                    color={
                                                        app.status === "Approved"
                                                            ? "success"
                                                            : app.status === "Pending"
                                                                ? "warning"
                                                                : "error"
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>{app.date}</TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete" color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </MainLayout>
    );
};

export default FSC;




