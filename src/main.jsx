import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppNOC from './AppNOC.jsx'
import AppInspector from './AppInspector.jsx'
import HomePage from './HomePage.jsx'
import AppCompliance from './AppCompliance.jsx'
// import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#dc2626",
    },
    secondary: {
      main: "#1f2937",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppNOC/> */}
    {/* <AppInspector /> */}
    {/* <AppCompliance /> */}
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
   
  </StrictMode>,
)
