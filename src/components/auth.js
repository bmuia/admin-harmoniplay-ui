// src/hooks/useLogin.js

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/UseContext"; // 🔄 Import the context hook to access login()

// 🛠️ Django backend base URL
const BASE_URL = 'http://localhost:8000';

/**
 * 🎯 Custom Hook: useLogin
 * Encapsulates the login logic and integrates with AuthContext.
 * 
 * Usage:
 * const { handleLogin } = useLogin();
 * handleLogin(email, password, setError, setSuccess, navigate);
 */
export const useLogin = () => {
    // 🌐 Pull in login function from AuthContext
    const { login } = useAuth();

    /**
     * 🔐 handleLogin: Handles authentication flow
     * 1. Sends POST to Django backend
     * 2. Saves token and updates AuthContext
     * 3. Redirects user based on admin role
     */
    const handleLogin = async (email, password, setError, setSuccess, navigate) => {
        try {
            // 📨 Send user credentials to backend login endpoint
            const res = await axios.post(`${BASE_URL}/accounts/login/`, {
                email,
                password,
            });

            // ✅ On success, update UI feedback
            setSuccess("Login successful ✅");
            setError("");

            // 🔓 Extract access token from response
            const { access } = res.data;

            // 🧠 Decode token to get user info
            const decoded = jwtDecode(access);
            console.log("Decoded JWT:", decoded); // Helpful for debugging

            // 🔐 Save token + update auth state in context
            login(access);

            // 📍 Redirect user based on `admin` flag in JWT
            if (decoded.admin) {
                navigate("/dashboard");
            } else {
                navigate("/error");
            }

        } catch (error) {
            // ❌ Handle login failure
            console.error("Login error:", error);
            setError("Error while logging in ❌");
            setSuccess("");
        }
    };

    // 🔁 Return handler so components can use it
    return { handleLogin };
};
