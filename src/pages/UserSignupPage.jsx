
// UserSignupPage.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { TextField, Button, InputAdornment } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignupPage = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [formValues, setFormValues] = useState({
        mobile: '',
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
        console.log('Simulating signup:', {
            ...formValues,
            role: 'user', // Default role for regular users
        });

        // Simulate a successful response
        setTimeout(() => {
            setIsLoading(false);
            alert('Account created successfully!');
            navigate('/login/user'); // Redirect to user login page
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
                <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
                <p className="text-gray-500 text-center">Create your FireGuard account</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Mobile Number Field */}
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

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
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                </form>

                <p className="text-center text-gray-500">
                    Already have an account?
                    <button
                        className="text-red-600 font-medium ml-2"
                        onClick={() => navigate('/login/user')}
                    >
                        Login
                    </button>
                </p>
            </div>
        </motion.div>
    );
};

export default UserSignupPage;