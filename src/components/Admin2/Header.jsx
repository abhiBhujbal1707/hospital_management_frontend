import React from 'react';
import { Search, BellRing } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-xl">
          <Search size={20} className="text-gray-400" />
          <input type="text" placeholder="Search..." className="ml-2 bg-transparent border-none focus:outline-none w-full" />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full ml-4 relative">
          <BellRing size={20} />
          <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </button>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full ml-4"
        />
      </div>
    </header>
  );
};

export default Header;