// src/components/RecipeFilters/index.jsx
import React, { useState } from 'react';
import { Clock, ChefHat, Filter } from 'lucide-react';

const RecipeFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    difficulty: 'all',
    time: 'all',
    category: 'all'
  });

  const difficulties = ['All', 'Easy', 'Intermediate', 'Advanced'];
  const times = ['All', '< 30 mins', '30-60 mins', '> 60 mins'];
  const categories = ['All', 'Italian', 'Asian', 'Vegetarian', 'Desserts', 'Breakfast'];

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value.toLowerCase() };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-emerald-800 font-medium mb-2">
            <ChefHat className="w-4 h-4" />
            Difficulty
          </label>
          <select 
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500"
          >
            {difficulties.map(diff => (
              <option key={diff} value={diff.toLowerCase()}>{diff}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-emerald-800 font-medium mb-2">
            <Clock className="w-4 h-4" />
            Cooking Time
          </label>
          <select 
            value={filters.time}
            onChange={(e) => handleFilterChange('time', e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500"
          >
            {times.map(time => (
              <option key={time} value={time.toLowerCase()}>{time}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-emerald-800 font-medium mb-2">
            <Filter className="w-4 h-4" />
            Category
          </label>
          <select 
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500"
          >
            {categories.map(category => (
              <option key={category} value={category.toLowerCase()}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RecipeFilters;