import React, { useState, useEffect } from "react";
import MainLayout from "../MainLayout";
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    Menu,
    MenuItem,
} from "@mui/material";

const today = new Date().toISOString().split("T")[0];

// Dummy data (Replace this with data fetched from backend)
const dummyData = Array.from({ length: 50 }, (_, i) => {
    const issuedDate = `2023-03-${String((i % 28) + 1).padStart(2, "0")}`;
    const expiryDate = i % 5 === 0 ? `2024-02-${String((i % 28) + 1).padStart(2, "0")}` : `2026-03-${String((i % 28) + 1).padStart(2, "0")}`;
    const isExpired = expiryDate < today;

    return {
        id: `NOC-${String(i + 1).padStart(3, "0")}`,
        name: `Applicant ${i + 1}`,
        business: `Business ${i + 1}`,
        address: `${i + 1} Example Street`,
        issued: issuedDate,
        expiry: expiryDate,
        expired: isExpired ? "Expired" : "Valid",
        status: "Issued",
    };
});

const IssuedCertificates = () => {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    // Fetch data from backend (Replace this with actual API call)
    useEffect(() => {
        // Simulating API call with dummy data
        setFilteredData(dummyData);
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setFilteredData(
            dummyData.filter((item) =>
                item.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    const handleFilter = (filterType) => {
        if (filterType === "All") {
            setFilteredData(dummyData);
        } else {
            setFilteredData(
                dummyData.filter((item) => item.expired === filterType)
            );
        }
        setAnchorEl(null); // Close the menu after selection
    };

    const exportCSV = () => {
        const csvContent =
            "data:text/csv;charset=utf-8," +
            [
                "Certificate ID,Applicant Name,Business Name,Business Address,Issued Date,Expiry Date,Expired,Status",
                ...filteredData.map(
                    (row) =>
                        `${row.id},${row.name},${row.business},${row.address},${row.issued},${row.expiry},${row.expired},${row.status}`
                ),
            ].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "issued_certificates.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <MainLayout>
            <Box>
                <Box className="p-6 min-h-screen bg-gray-100">
                    <Card>
                        <CardContent>
                            {/* Header Section */}
                            <Box className="flex justify-between items-center mb-4">
                                <TextField
                                    placeholder="Search by name..."
                                    value={search}
                                    onChange={handleSearch}
                                    size="small"
                                    sx={{ width: "30%" }}
                                />
                                {/* Filter Dropdown */}
                                <Button
                                    variant="outlined"
                                    onClick={(e) => setAnchorEl(e.currentTarget)}
                                    endIcon={<Box component="span" className="ml-2">▼</Box>}
                                >
                                    Filter
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    <MenuItem onClick={() => handleFilter("All")}>All</MenuItem>
                                    <MenuItem onClick={() => handleFilter("Valid")}>Valid</MenuItem>
                                    <MenuItem onClick={() => handleFilter("Expired")}>Expired</MenuItem>
                                </Menu>
                                {/* Export CSV Button */}
                                <Button variant="contained" color="primary" onClick={exportCSV}>
                                    Export CSV
                                </Button>
                            </Box>

                            {/* Table Section */}
                            <TableContainer component={Paper} className="max-h-[70vh] overflow-y-auto">
                                <Table stickyHeader aria-label="issued certificates table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Certificate ID</TableCell>
                                            <TableCell>Applicant Name</TableCell>
                                            <TableCell>Business Name</TableCell>
                                            <TableCell>Business Address</TableCell>
                                            <TableCell>Issued Date</TableCell>
                                            <TableCell>Expiry Date</TableCell>
                                            <TableCell>Expired</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filteredData.map((item, index) => (
                                            <TableRow key={index} className={index % 2 ? "bg-gray-100" : ""}>
                                                <TableCell>{item.id}</TableCell>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>{item.business}</TableCell>
                                                <TableCell>{item.address}</TableCell>
                                                <TableCell>{item.issued}</TableCell>
                                                <TableCell>{item.expiry}</TableCell>
                                                <TableCell>
                                                    <Typography
                                                        color={item.expired === "Expired" ? "error" : "success"}
                                                        fontWeight="bold"
                                                    >
                                                        {item.expired}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="success" fontWeight="bold">
                                                        {item.status}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </MainLayout>
    );
};

export default IssuedCertificates; // Export the page component



