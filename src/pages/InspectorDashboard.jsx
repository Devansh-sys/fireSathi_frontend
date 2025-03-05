// import React, { useState, useEffect } from "react";

// import {
//     Box,
//     Typography,
//     Button,
//     Card,
//     CardContent,
//     Grid,
//     LinearProgress,
// } from "@mui/material";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
// } from "recharts";

// // Dummy data (Replace with API call) 🔴 Backend Required
// const weeklyData = [
//     { name: "Week 1", inspectionsApproved: 10, inspectionsFailed: 5 },
//     { name: "Week 2", inspectionsApproved: 15, inspectionsFailed: 8 },
//     { name: "Week 3", inspectionsApproved: 20, inspectionsFailed: 10 },
//     { name: "Week 4", inspectionsApproved: 18, inspectionsFailed: 7 },
// ];

// const monthlyData = [
//     { name: "Jan", inspectionsApproved: 50, inspectionsFailed: 20 },
//     { name: "Feb", inspectionsApproved: 55, inspectionsFailed: 25 },
//     { name: "Mar", inspectionsApproved: 70, inspectionsFailed: 30 },
//     { name: "Apr", inspectionsApproved: 65, inspectionsFailed: 28 },
// ];

// const yearlyData = [
//     { name: "2021", inspectionsApproved: 500, inspectionsFailed: 200 },
//     { name: "2022", inspectionsApproved: 550, inspectionsFailed: 250 },
//     { name: "2023", inspectionsApproved: 700, inspectionsFailed: 300 },
//     { name: "2024", inspectionsApproved: 650, inspectionsFailed: 280 },
// ];

// const InspectorDashboard = () => {
//     const [dailyProgress, setDailyProgress] = useState({ approvals: 8, failures: 3, target: 12 });
//     const [timeframe, setTimeframe] = useState("weekly");

//     const getPerformanceData = () => {
//         switch (timeframe) {
//             case "monthly":
//                 return monthlyData;
//             case "yearly":
//                 return yearlyData;
//             default:
//                 return weeklyData;
//         }
//     };

//     useEffect(() => {
//         // Fetch daily progress from backend 🔴 Backend Required
//     }, []);

//     return (
//         <Box className="p-6 min-h-screen bg-gray-100">
//             {/* Inspector Details */}
//             <Card className="mb-6">
//                 <CardContent>
//                     <Box display="flex" alignItems="center" gap={4}>
//                         <Box>
//                             <Typography variant="h4" fontWeight="bold">
//                                 Inspector
//                             </Typography>
//                             <Typography>ID: INSP56789</Typography>
//                             <Typography>Name: Jane Doe</Typography>
//                             <Typography>Department: Fire Safety Inspections</Typography>
//                         </Box>
//                     </Box>
//                 </CardContent>
//             </Card>

//             {/* Daily Inspection Overview */}
//             <Card className="mb-6">
//                 <CardContent>
//                     <Typography variant="h5" fontWeight="bold" className="mb-4">
//                         Daily Inspection Overview
//                     </Typography>
//                     <Box display="flex" alignItems="center" gap={2} className="mb-2">
//                         <Typography>{dailyProgress.approvals} Approvals / {dailyProgress.target}</Typography>
//                     </Box>
//                     <LinearProgress
//                         variant="determinate"
//                         value={(dailyProgress.approvals / dailyProgress.target) * 100}
//                         color="primary"
//                     />
//                     <Box display="flex" alignItems="center" gap={2} className="mt-2">
//                         <Typography color="error">{dailyProgress.failures} Failed Inspections</Typography>
//                     </Box>
//                 </CardContent>
//             </Card>

//             {/* Performance Graph */}
//             <Card>
//                 <CardContent>
//                     <Box display="flex" justifyContent="space-between" alignItems="center" className="mb-4">
//                         <Typography variant="h5" fontWeight="bold">
//                             Performance Overview
//                         </Typography>
//                         <Box display="flex" gap={2}>
//                             <Button
//                                 variant={timeframe === "weekly" ? "contained" : "outlined"}
//                                 onClick={() => setTimeframe("weekly")}
//                             >
//                                 Weekly
//                             </Button>
//                             <Button
//                                 variant={timeframe === "monthly" ? "contained" : "outlined"}
//                                 onClick={() => setTimeframe("monthly")}
//                             >
//                                 Monthly
//                             </Button>
//                             <Button
//                                 variant={timeframe === "yearly" ? "contained" : "outlined"}
//                                 onClick={() => setTimeframe("yearly")}
//                             >
//                                 Yearly
//                             </Button>
//                         </Box>
//                     </Box>
//                     <ResponsiveContainer width="100%" height={400}>
//                         <LineChart data={getPerformanceData()}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Line type="monotone" dataKey="inspectionsApproved" stroke="#8884d8" strokeWidth={2} />
//                             <Line type="monotone" dataKey="inspectionsFailed" stroke="#ff4d4d" strokeWidth={2} />
//                         </LineChart>
//                     </ResponsiveContainer>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default InspectorDashboard; // Export the page component