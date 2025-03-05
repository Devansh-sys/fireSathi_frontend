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
//     { name: "Week 1", approvals: 12, verifications: 15 },
//     { name: "Week 2", approvals: 18, verifications: 20 },
//     { name: "Week 3", approvals: 22, verifications: 25 },
//     { name: "Week 4", approvals: 19, verifications: 23 },
// ];

// const monthlyData = [
//     { name: "Jan", approvals: 50, verifications: 60 },
//     { name: "Feb", approvals: 55, verifications: 65 },
//     { name: "Mar", approvals: 70, verifications: 80 },
//     { name: "Apr", approvals: 65, verifications: 75 },
// ];

// const yearlyData = [
//     { name: "2021", approvals: 500, verifications: 600 },
//     { name: "2022", approvals: 550, verifications: 650 },
//     { name: "2023", approvals: 700, verifications: 800 },
//     { name: "2024", approvals: 650, verifications: 750 },
// ];

// const ComplianceDashboard = () => {
//     const [dailyProgress, setDailyProgress] = useState({ approvals: 5, verifications: 7, target: 10 });
//     const [completion, setCompletion] = useState({ firePlanApproved: 8, safetyCertChecked: 6, target: 10 });
//     const [failed, setFailed] = useState({ failedFPA: 2, failedCert: 3 });
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
//         // Fetch daily progress & failed applications from backend 🔴 Backend Required
//     }, []);

//     return (
//         <Box className="p-6 min-h-screen bg-gray-100">
//             {/* Compliance Officer Details */}
//             <Card className="mb-6">
//                 <CardContent>
//                     <Box display="flex" alignItems="center" gap={4}>
//                         <Box>
//                             <Typography variant="h4" fontWeight="bold">
//                                 Compliance Officer
//                             </Typography>
//                             <Typography>ID: CO12345</Typography>
//                             <Typography>Name: John Doe</Typography>
//                             <Typography>Department: Fire Safety Compliance</Typography>
//                         </Box>
//                     </Box>
//                 </CardContent>
//             </Card>

//             {/* Daily Task Overview */}
//             <Card className="mb-6">
//                 <CardContent>
//                     <Typography variant="h5" fontWeight="bold" className="mb-4">
//                         Daily Task Overview
//                     </Typography>
//                     <Box display="flex" alignItems="center" gap={2} className="mb-2">
//                         <Typography>{dailyProgress.approvals} Approvals / {dailyProgress.target}</Typography>
//                     </Box>
//                     <LinearProgress
//                         variant="determinate"
//                         value={(dailyProgress.approvals / dailyProgress.target) * 100}
//                         color="primary"
//                     />
//                     <Box display="flex" alignItems="center" gap={2} className="mt-4 mb-2">
//                         <Typography>{dailyProgress.verifications} Verifications / {dailyProgress.target}</Typography>
//                     </Box>
//                     <LinearProgress
//                         variant="determinate"
//                         value={(dailyProgress.verifications / dailyProgress.target) * 100}
//                         color="secondary"
//                     />
//                 </CardContent>
//             </Card>

//             {/* Completion Status */}
//             <Card className="mb-6">
//                 <CardContent>
//                     <Typography variant="h5" fontWeight="bold" className="mb-4">
//                         Completion Status
//                     </Typography>
//                     <Box display="flex" alignItems="center" gap={2} className="mb-2">
//                         <Typography>{completion.firePlanApproved} Fire Plans Approved / {completion.target}</Typography>
//                     </Box>
//                     <LinearProgress
//                         variant="determinate"
//                         value={(completion.firePlanApproved / completion.target) * 100}
//                         color="success"
//                     />
//                     <Box display="flex" alignItems="center" gap={2} className="mt-4 mb-2">
//                         <Typography>{completion.safetyCertChecked} Fire Safety Certificates Checked / {completion.target}</Typography>
//                     </Box>
//                     <LinearProgress
//                         variant="determinate"
//                         value={(completion.safetyCertChecked / completion.target) * 100}
//                         color="info"
//                     />
//                 </CardContent>
//             </Card>

//             {/* Failed Applications */}
//             <Card className="mb-6">
//                 <CardContent>
//                     <Typography variant="h5" fontWeight="bold" className="mb-4">
//                         Failed Applications
//                     </Typography>
//                     <Box display="flex" alignItems="center" gap={2} className="mb-2">
//                         <Typography color="error">{failed.failedFPA} Failed Fire Plan Approvals</Typography>
//                     </Box>
//                     <Box display="flex" alignItems="center" gap={2} className="mb-2">
//                         <Typography color="error">{failed.failedCert} Failed Fire Safety Certificates</Typography>
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
//                             <Line type="monotone" dataKey="approvals" stroke="#8884d8" strokeWidth={2} />
//                             <Line type="monotone" dataKey="verifications" stroke="#82ca9d" strokeWidth={2} />
//                         </LineChart>
//                     </ResponsiveContainer>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default ComplianceDashboard; // Export the page component