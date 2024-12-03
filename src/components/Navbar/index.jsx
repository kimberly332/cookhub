// src/components/Navbar/index.jsx
import React, { useState } from 'react';
import { Search, Sun, Moon, Heart, User } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-emerald-800">CookHub</a>
            <div className="hidden md:flex items-center gap-6">
              <a href="/categories" className="text-gray-600 hover:text-emerald-600">Categories</a>
              <a href="/popular" className="text-gray-600 hover:text-emerald-600">Popular</a>
              <a href="/seasonal" className="text-gray-600 hover:text-emerald-600">Seasonal</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 hover:bg-gray-100 rounded-full">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {isSearchOpen && (
          <div className="py-3">
            <input 
              type="text" 
              placeholder="Search recipes..."
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;