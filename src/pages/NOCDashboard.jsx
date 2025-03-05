/* eslint-disable no-unused-vars */


import MainLayout from "../MainLayout";
import { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Grid,
    Avatar,
    IconButton,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider,
    Menu,
    MenuItem,
    Badge,
} from "@mui/material";
import {
    NotificationsOutlined,
    SettingsOutlined,
    MoreVert,
    TrendingUp,
    TrendingDown,
    CalendarToday,
    LocationCity,
    ArrowUpward,
    ArrowDownward,
    CheckCircle,
    Cancel,
    Pending,
} from "@mui/icons-material";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

// Sample data for charts (unchanged)
const monthlyApplicationData = [
    { name: "Jan", applications: 65, approvals: 40 },
    { name: "Feb", applications: 59, approvals: 45 },
    { name: "Mar", applications: 80, approvals: 60 },
    { name: "Apr", applications: 81, approvals: 55 },
    { name: "May", applications: 56, approvals: 40 },
    { name: "Jun", applications: 55, approvals: 45 },
    { name: "Jul", applications: 40, approvals: 30 },
];

const weeklyApplicationData = [
    { name: "16/08", applications: 4000, inspections: 2400 },
    { name: "17/08", applications: 3000, inspections: 1398 },
    { name: "18/08", applications: 2000, inspections: 9800 },
    { name: "19/08", applications: 2780, inspections: 3908 },
    { name: "20/08", applications: 1890, inspections: 4800 },
    { name: "21/08", applications: 2390, inspections: 3800 },
];

const applicationTypeData = [
    { name: "Commercial", value: 400 },
    { name: "Residential", value: 300 },
    { name: "Industrial", value: 200 },
    { name: "Institutional", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const topPerformers = [
    {
        id: 1,
        name: "Rajesh Sharma",
        role: "Fire Safety Officer",
        project: "Commercial Inspections",
        impact: "High",
        approvals: 320,
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 2,
        name: "Meena Gupta",
        role: "NOC Verification Head",
        project: "Residential Approvals",
        impact: "Medium",
        approvals: 215,
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 3,
        name: "Anil Kumar",
        role: "Inspection Specialist",
        project: "Industrial Safety",
        impact: "Very High",
        approvals: 450,
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 4,
        name: "Sunita Reddy",
        role: "Application Processor",
        project: "Institutional NOCs",
        impact: "Low",
        approvals: 180,
        avatar: "/placeholder.svg?height=40&width=40",
    },
];

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // eslint-disable-next-line no-unused-vars
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // eslint-disable-next-line no-unused-vars
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MainLayout>
            <Box>
                {/* Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                    <Typography variant="h4">Fire NOC Dashboard</Typography>
                    <IconButton>
                        <NotificationsOutlined />
                    </IconButton>
                </Box>

                {/* KPI Cards */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="subtitle1"> Applications</Typography>
                            <Typography variant="h5">75,342</Typography>
                            <Typography variant="caption" color="green">
                                +12% from previous year
                            </Typography>
                            <Button fullWidth>View Detailed Report</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="subtitle1">Approved NOCs</Typography>
                            <Typography variant="h5">42,965</Typography>
                            <Typography variant="caption" color="green">
                                +9% from previous month
                            </Typography>
                            <Button fullWidth>View Approvals</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="subtitle1">Pending Inspections</Typography>
                            <Typography variant="h5">58,320</Typography>
                            <Typography variant="caption" color="red">
                                -5% from previous month
                            </Typography>
                            <Button fullWidth>Schedule Inspections</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="subtitle1">Rejected Applications</Typography>
                            <Typography variant="h5">35,180</Typography>
                            <Typography variant="caption" color="red">
                                -2% from previous month
                            </Typography>
                            <Button fullWidth>View Rejections</Button>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Charts Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">Weekly Application Overview</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={weeklyApplicationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="applications" stroke="#8884d8" />
                            <Line type="monotone" dataKey="inspections" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>

                {/* Application Type Pie Chart */}
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">Application Types</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={applicationTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) =>
                                    `${name} ${(percent * 100).toFixed(0)}%`
                                }
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {applicationTypeData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>

                {/* Top Performers Table */}
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">Top Performers</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Officer</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Project</TableCell>
                                    <TableCell>Impact</TableCell>
                                    <TableCell>Approvals</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {topPerformers.map((performer) => (
                                    <TableRow key={performer.id}>
                                        <TableCell>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Avatar src={performer.avatar} sx={{ mr: 1 }} />
                                                {performer.name}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{performer.role}</TableCell>
                                        <TableCell>{performer.project}</TableCell>
                                        <TableCell>{performer.impact}</TableCell>
                                        <TableCell>{performer.approvals}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </MainLayout>
    );
};

export default Dashboard;
