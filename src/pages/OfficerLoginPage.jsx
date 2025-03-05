/* eslint-disable no-unused-vars */
// OfficerLoginPage.jsx
import { motion } from 'framer-motion';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OfficerLoginPage = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        // Simulate sending data to the backend
        console.log('Simulating officer login:', formValues);

        // Simulate a successful response
        setTimeout(() => {
            setIsLoading(false);
            alert('Login successful!');
            navigate('/officer-dashboard'); // Redirect to officer dashboard
        }, 1000);
    };

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Officer Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        InputProps={{
                            className: 'bg-gray-50 rounded-lg',
                        }}
                        required
                    />

                    {/* Password Field */}
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        name="password"
                        value={formValues.password}
                        onChange={handleInputChange}
                        InputProps={{
                            className: 'bg-gray-50 rounded-lg',
                        }}
                        required
                    />

                    {/* Submit Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging In...' : 'Login'}
                    </Button>
                </form>

                <p className="text-center text-gray-500">
                    Not an officer?{' '}
                    <button
                        className="text-red-600 font-medium ml-2"
                        onClick={() => navigate('/login/user')}
                    >
                        User Login
                    </button>
                </p>
            </div>
        </motion.div>
    );
};

export default OfficerLoginPage;