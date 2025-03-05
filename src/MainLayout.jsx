import { Box } from "@mui/material";
import SidebarNOC from "./components/SidebarNOC";

const MainLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            {/* Sidebar */}
            <SidebarNOC />

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3, // Padding inside the main content
                    marginLeft: "240px", // Matches the width of the sidebar
                    backgroundColor: "#f9fafb", // Light background for content
                    minHeight: "100vh",
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;