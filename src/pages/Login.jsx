import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLogin } from '../components/auth';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const { handleLogin } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(email, password, setError, setSuccess, navigate);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-3xl font-semibold text-center text-gray-800">Admin Login</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
                    >
                        Login
                    </button>

                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                    {success && <p className="text-sm text-green-600 text-center">{success}</p>}

                    <p className="text-xs text-center text-gray-400">Note: Admins only are allowed to login.</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
