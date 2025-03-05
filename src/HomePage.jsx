"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import {
  Close as CloseIcon,
  LocalFireDepartment,
  Email,
  Lock,
  Person,
  Speed,
  Security,
  Notifications,
  Analytics,
  CheckCircle,
} from "@mui/icons-material"

function App() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)
  const [isUserLogin, setIsUserLogin] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const handleOpenUserLogin = () => {
    setIsUserLogin(true)
    setOpenLogin(true)
  }

  const handleOpenEmployeeLogin = () => {
    setIsUserLogin(false)
    setOpenLogin(true)
  }

  const handleOpenSignUp = () => {
    setOpenSignUp(true)
  }

  const handleCloseLogin = () => {
    setOpenLogin(false)
  }

  const handleCloseSignUp = () => {
    setOpenSignUp(false)
  }

  const stats = [
    { value: "98%", label: "Compliance Rate" },
    { value: "30%", label: "Time Saved" },
    { value: "24/7", label: "Monitoring" },
    { value: "15min", label: "Response Time" },
  ]

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Advanced sensors and IoT integration provide continuous monitoring of all fire safety systems.",
      icon: <Speed className="text-red-500" fontSize="large" />,
    },
    {
      title: "Automated Inspections",
      description:
        "AI-powered scheduling and digital checklists streamline the inspection process, reducing manual work.",
      icon: <CheckCircle className="text-red-500" fontSize="large" />,
    },
    {
      title: "Compliance Dashboard",
      description:
        "Comprehensive analytics and reporting tools ensure all buildings meet the latest fire safety regulations.",
      icon: <Analytics className="text-red-500" fontSize="large" />,
    },
    {
      title: "Instant Notifications",
      description: "Critical alerts delivered via SMS, email, and push notifications to ensure immediate response.",
      icon: <Notifications className="text-red-500" fontSize="large" />,
    },
    {
      title: "Secure Data Storage",
      description: "Enterprise-grade encryption and secure cloud storage protect all your sensitive fire safety data.",
      icon: <Security className="text-red-500" fontSize="large" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        className={`transition-all duration-300 ${scrolled ? "bg-red-700" : "bg-transparent"}`}
      >
        <Toolbar className="justify-between py-2">
          <div className="flex items-center">
            <div className="bg-white p-1.5 rounded-full mr-3 shadow-md">
              <LocalFireDepartment className="text-red-600" fontSize={isMobile ? "small" : "medium"} />
            </div>
            <Typography variant={isMobile ? "h6" : "h5"} component="div" className="font-bold text-white">
              Fire-Saathi<span className="font-light">Pro</span>
            </Typography>
          </div>
          <div className="flex gap-2 md:gap-3">
            <Button
              variant="text"
              color="inherit"
              onClick={handleOpenUserLogin}
              className="text-white hover:bg-white/10 px-3 py-1 text-sm md:text-base rounded-full"
            >
              User Login
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={handleOpenEmployeeLogin}
              className="text-white hover:bg-white/10 px-3 py-1 text-sm md:text-base rounded-full"
            >
              Employee Login
            </Button>
            <Button
              variant="contained"
              onClick={handleOpenSignUp}
              className="bg-white text-red-600 hover:bg-gray-100 px-4 py-1 text-sm md:text-base shadow-md rounded-full"
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-red-700 to-red-900">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Container maxWidth="lg" className="relative z-10">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="overline" component="div" className="text-red-300 tracking-widest mb-2">
                  NEXT GENERATION FIRE SAFETY
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                >
                  Automating Fire Safety for the Future
                </Typography>
                <Typography variant="h6" component="p" className="text-gray-200 mb-8 max-w-xl">
                  Our comprehensive system streamlines fire safety monitoring, inspection scheduling, and compliance
                  tracking, helping fire departments save time and resources while enhancing community safety.
                </Typography>

                <div className="flex flex-wrap gap-4 mb-12">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleOpenSignUp}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full"
                  >
                    Watch Demo
                  </Button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Typography variant="h4" component="div" className="text-white font-bold mb-1">
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" component="div" className="text-gray-300">
                        {stat.label}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>

              <Grid item xs={12} md={5} className="hidden md:block">
                <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="bg-red-600 h-3 w-3 rounded-full mr-2"></div>
                      <div className="bg-yellow-500 h-3 w-3 rounded-full mr-2"></div>
                      <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                    </div>
                    <Typography variant="caption" className="text-gray-400">
                      Fire-Saathi Dashboard
                    </Typography>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <Typography variant="subtitle2" className="text-gray-300 mb-2">
                        System Status
                      </Typography>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <Typography variant="body2" className="text-green-400">
                          All Systems Operational
                        </Typography>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4">
                      <Typography variant="subtitle2" className="text-gray-300 mb-2">
                        Recent Alerts
                      </Typography>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Typography variant="caption" className="text-gray-400">
                            Building A - Sprinkler Check
                          </Typography>
                          <Typography variant="caption" className="text-green-400">
                            Completed
                          </Typography>
                        </div>
                        <div className="flex items-center justify-between">
                          <Typography variant="caption" className="text-gray-400">
                            Building C - Smoke Detector
                          </Typography>
                          <Typography variant="caption" className="text-yellow-400">
                            Pending
                          </Typography>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4">
                      <Typography variant="subtitle2" className="text-gray-300 mb-2">
                        Compliance Status
                      </Typography>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-2.5 rounded-full w-[98%]"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <Typography variant="caption" className="text-gray-400">
                          98% Complete
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          2 Items Remaining
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <Container maxWidth="lg">
            <div className="text-center mb-16">
              <Typography variant="overline" component="div" className="text-red-600 tracking-widest mb-2 font-medium">
                POWERFUL CAPABILITIES
              </Typography>
              <Typography variant="h2" component="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Features for Modern Fire Departments
              </Typography>
              <Typography variant="subtitle1" component="p" className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive platform combines cutting-edge technology with intuitive design to revolutionize how
                fire departments manage safety and compliance.
              </Typography>
            </div>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={index < 2 ? 6 : 4} key={index}>
                  <Card
                    elevation={0}
                    className="h-full transition-all duration-300 hover:shadow-xl border border-gray-100 rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <Typography variant="h5" component="h3" className="text-gray-900 mb-3">
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" component="p" className="text-gray-600">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-700 to-red-800">
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="h2" component="h2" className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to transform your fire safety operations?
                </Typography>
                <Typography variant="subtitle1" component="p" className="text-red-100 mb-8 max-w-xl">
                  Join hundreds of fire departments already using Fire-Saathi to streamline operations, improve
                  compliance, and enhance community safety.
                </Typography>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleOpenSignUp}
                    className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 text-lg rounded-full"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} md={5}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                  <Typography variant="h5" component="h3" className="text-white mb-6 font-bold">
                    Join our newsletter
                  </Typography>

                  <form className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-1.5 flex items-center">
                      <Email className="text-white/60 ml-3 mr-2" />
                      <TextField
                        variant="standard"
                        placeholder="Your email address"
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                          style: { color: "white" },
                        }}
                      />
                    </div>

                    <Button
                      variant="contained"
                      fullWidth
                      className="bg-white text-red-700 hover:bg-gray-100 py-3 text-lg rounded-full"
                    >
                      Subscribe
                    </Button>

                    <Typography variant="caption" className="text-red-100 block text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </Typography>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <div className="flex items-center mb-4">
                <div className="bg-red-600 p-1.5 rounded-full mr-3">
                  <LocalFireDepartment className="text-white" fontSize="small" />
                </div>
                <Typography variant="h6" component="div" className="font-bold">
                  FireSaathi<span className="font-light">Pro</span>
                </Typography>
              </div>
              <Typography variant="body2" className="text-gray-400 mb-6 max-w-xs">
                Revolutionizing fire safety management with cutting-edge technology and intuitive design.
              </Typography>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </Grid>

            {["Product", "Company", "Resources", "Legal"].map((category) => (
              <Grid item xs={6} md={2} key={category}>
                <Typography variant="subtitle2" className="font-bold mb-4">
                  {category}
                </Typography>
                <ul className="space-y-2">
                  {["Link 1", "Link 2", "Link 3", "Link 4"].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>

          <Divider className="my-8 border-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <Typography variant="caption" className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Fire-Saathi. All rights reserved.
            </Typography>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </Container>
      </footer>

      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={handleCloseLogin} maxWidth="xs" fullWidth>
        <DialogTitle className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="flex justify-between items-center">
            <Typography variant="h6" component="div" className="font-semibold">
              {isUserLogin ? "User Login" : "Employee Login"}
            </Typography>
            <IconButton onClick={handleCloseLogin} size="small" className="text-white">
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className="p-6">
          <form className="space-y-4 py-4">
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <Email className="text-gray-400 mr-3" />
              <TextField
                variant="standard"
                placeholder="Email Address"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <Lock className="text-gray-400 mr-3" />
              <TextField
                variant="standard"
                type="password"
                placeholder="Password"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-red-600 hover:text-red-800 font-medium">
                Forgot password?
              </a>
            </div>

            <Button
              variant="contained"
              fullWidth
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg"
            >
              {isUserLogin ? "Sign In as User" : "Sign In as Employee"}
            </Button>

            <Divider className="my-4">
              <Typography variant="caption" className="text-gray-500">
                OR
              </Typography>
            </Divider>

            <Button
              variant="outlined"
              fullWidth
              className="border border-gray-300 text-gray-700 py-2.5 rounded-lg normal-case"
              startIcon={
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
              }
            >
              Sign in with Google
            </Button>

            <div className="text-center mt-6">
              <Typography variant="body2" className="text-gray-600">
                Don't have an account?{" "}
                <span
                  className="text-red-600 hover:text-red-800 font-medium cursor-pointer"
                  onClick={() => {
                    handleCloseLogin()
                    handleOpenSignUp()
                  }}
                >
                  Sign Up
                </span>
              </Typography>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Sign Up Dialog */}
      <Dialog open={openSignUp} onClose={handleCloseSignUp} maxWidth="xs" fullWidth>
        <DialogTitle className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="flex justify-between items-center">
            <Typography variant="h6" component="div" className="font-semibold">
              Create an Account
            </Typography>
            <IconButton onClick={handleCloseSignUp} size="small" className="text-white">
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className="p-6">
          <form className="space-y-4 py-4">
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <Person className="text-gray-400 mr-3" />
              <TextField variant="standard" placeholder="Full Name" fullWidth InputProps={{ disableUnderline: true }} />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <Email className="text-gray-400 mr-3" />
              <TextField
                variant="standard"
                placeholder="Email Address"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <Lock className="text-gray-400 mr-3" />
              <TextField
                variant="standard"
                type="password"
                placeholder="Password"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <Lock className="text-gray-400 mr-3" />
              <TextField
                variant="standard"
                type="password"
                placeholder="Confirm Password"
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </div>

            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-red-600 hover:text-red-800 font-medium">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-red-600 hover:text-red-800 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <Button
              variant="contained"
              fullWidth
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg mt-6"
            >
              Create Account
            </Button>

            <Divider className="my-4">
              <Typography variant="caption" className="text-gray-500">
                OR
              </Typography>
            </Divider>

            <Button
              variant="outlined"
              fullWidth
              className="border border-gray-300 text-gray-700 py-2.5 rounded-lg normal-case"
              startIcon={
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
              }
            >
              Sign up with Google
            </Button>

            <div className="text-center mt-6">
              <Typography variant="body2" className="text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-red-600 hover:text-red-800 font-medium cursor-pointer"
                  onClick={() => {
                    handleCloseSignUp()
                    handleOpenUserLogin()
                  }}
                >
                  Sign In
                </span>
              </Typography>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App

