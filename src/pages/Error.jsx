import React from 'react';

function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white border border-red-200 shadow-lg rounded-2xl p-6 max-w-md text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Access Denied</h2>
        <p className="text-gray-700">
          You tried to access an admin-only page, but it looks like you don't have the right permissions.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          If you think this is a mistake, please contact support or your administrator.
        </p>
      </div>
    </div>
  );
}

export default Error;
