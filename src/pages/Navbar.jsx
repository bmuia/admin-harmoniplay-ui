import React from 'react';
import { useAuth } from '../context/UseContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true });
    };

    return (
        <nav className="w-full fixed top-0 left-0 bg-white shadow border-b z-50">
            <div className="mx-auto px-6 py-3 flex items-center justify-between">
                
                {/* Left: Logo & Title */}
                <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-blue-600">Harmoniplay Admin</span>
                    <div className="text-sm text-gray-500 border-l pl-3">Dashboard</div>
                </div>

                <div className="flex items-center space-x-6">
                    {/* <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">Users</span>
                    <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">Reports</span>
                    <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">Settings</span> */}


                    {/* <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full" />
                        <span className="text-sm text-gray-700">Admin</span>
                    </div> */}

                    {/* Logout button */}
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
