import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex pt-16"> {/* pt-16 to offset the fixed navbar */}
        <Sidebar />

        <main className="ml-64 p-6 w-full"> {/* ml-64 to offset the fixed sidebar */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
