import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed top-14 left-0 h-full w-52 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-semibold mb-6">Admin Menu</h2>
      <ul className="space-y-4 text-sm">
        <li>
          <Link to="/playlists" className="hover:text-blue-400">Playlists</Link>
        </li>
        <li>
          <Link to="/genres" className="hover:text-blue-400">Genres</Link>
        </li>
        <li>
          <Link to="/songs" className="hover:text-blue-400">Songs</Link>
        </li>
        <li>
          <Link to="/albums" className="hover:text-blue-400">Albums</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
