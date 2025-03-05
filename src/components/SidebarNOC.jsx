import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar,
    Grid,
} from "@mui/material";

import {
    HomeOutlined,
    AssignmentOutlined,
    ListAltOutlined,
    VerifiedUserOutlined,
    SettingsOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const SidebarNOC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <Box
            sx={{
                position: "fixed", // Fixed position for overlay
                top: 0,
                left: 0,
                width: "240px", // Width of the sidebar
                height: "100vh", // Full height
                backgroundColor: "#f9fafb", // Softer background color
                color: "#333", // Darker text for contrast
                borderRight: "1px solid #e5e7eb", // Subtle border
                zIndex: 1000, // Ensure it stays on top of other content
                overflowY: "auto", // Enable scrolling if content overflows
            }}
        >
            {/* Sidebar Header */}
            <Box sx={{ textAlign: "center", py: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1e293b" }}>
                    Fire NOC System
                </Typography>
            </Box>

            {/* Navigation Links */}
            <List>
                {[
                    { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
                    { text: "Fire Plan Approval", icon: <AssignmentOutlined />, path: "/fpa" },
                    { text: "Fire Security Certificates", icon: <ListAltOutlined />, path: "/fsc" },
                    { text: "Fire Department List", icon: <VerifiedUserOutlined />, path: "/fireDepartment" },
                    { text: "Issued Certificates", icon: <SettingsOutlined />, path: "/issuedCertificates" },
                    { text: "Reports", icon: <SettingsOutlined />, path: "https://yashasvisharma-iet-applications-reports-ql89x9.streamlit.app/" },
                ].map(({ text, icon, path }, index) => (
                    <ListItem
                        button
                        key={text}
                        selected={selectedIndex === index}
                        onClick={() => handleListItemClick(index)}
                        component={Link} // Use Link to make the item clickable
                        to={path} // Specify the route path
                        sx={{
                            borderRadius: "8px", // Rounded corners
                            margin: "4px 8px", // Spacing between items
                            "&.Mui-selected": {
                                backgroundColor: "#e0f2fe", // Light blue for selected item
                                color: "#0284c7", // Blue text for selected item
                                "&:hover": {
                                    backgroundColor: "#bae6fd", // Slightly darker on hover
                                },
                            },
                            "&:hover": {
                                backgroundColor: "#f0f9ff", // Light hover effect
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            {/* Divider */}
            <Divider sx={{ borderColor: "#e5e7eb" }} />

            {/* Account Section */}
            <Box sx={{ mt: "auto", px: 2, py: 3 }}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Avatar
                            src="/placeholder.svg?height=40&width=40"
                            alt="Account Avatar"
                            sx={{
                                bgcolor: "#fff",
                                color: "#1e293b",
                                border: "1px solid #e5e7eb", // Subtle border
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                            John Doe
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#64748b" }}>
                            Administrator
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SidebarNOC;