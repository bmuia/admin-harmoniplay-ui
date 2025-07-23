// src/context/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// 🔧 Create a new Context to hold authentication state and logic
const AuthContext = createContext();

/**
 * 📦 Custom hook for easy access to the AuthContext
 * Usage: const { user, login, logout } = useAuth();
 */
export const useAuth = () => useContext(AuthContext);

/**
 * 🛡️ AuthProvider Component
 * Wrap your <App /> in this component to give access to auth state
 */
export const AuthProvider = ({ children }) => {
    // 👤 Stores decoded user info from JWT
    const [user, setUser] = useState(null);

    // ✅ True if user is logged in
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // ⏳ Used to delay rendering until we’ve checked for existing login
    const [loading, setLoading] = useState(true);

    /**
     * 🚀 useEffect runs once on app load
     * Checks if a token is stored in localStorage
     * If yes, decode it and authenticate the user
     */
    useEffect(() => {
        const token = localStorage.getItem('access_token');

        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
                setIsAuthenticated(true);
            } catch (err) {
                console.error("Invalid token ❌", err);
                localStorage.removeItem('access_token'); // Remove corrupted/expired token
            }
        }

        // ✅ Done checking authentication state
        setLoading(false);
    }, []);

    /**
     * 🔐 Call this after successful login
     * Saves token, decodes it, and updates auth state
     */
    const login = (token) => {
        const decoded = jwtDecode(token);
        localStorage.setItem('access_token', token);
        setUser(decoded);
        setIsAuthenticated(true);
    };

    /**
     * 🚪 Logs the user out
     * Clears token and resets state
     */
    const logout = () => {
        localStorage.removeItem('access_token');
        setUser(null);
        setIsAuthenticated(false);
    };

    /**
     * 🌍 Make user and auth functions available to children
     * Only render children after auth state has finished loading
     */
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {/* ⚠️ Avoid rendering protected routes until token check is done */}
            {!loading && children}
        </AuthContext.Provider>
    );
};
