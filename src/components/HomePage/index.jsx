// src/components/HomePage/index.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChefHat, Globe } from 'lucide-react';
import RecipeFilters from '../RecipeFilters';
import './HomePage.css';

const HomePage = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Classic Bolognese Pasta",
      image: "/step8.webp", 
      difficulty: "Intermediate",
      time: "3 hours",
      category: "Italian"
    },
    {
      id: 2,
      title: "Creamy Mushroom Risotto",
      image: "/step8.webp",
      difficulty: "Intermediate",
      time: "45 mins",
      category: "Italian"
    },
    {
      id: 3,
      title: "Grilled Salmon with Lemon Dill Sauce",
      image: "/step8.webp",
      difficulty: "Easy",
      time: "30 mins",
      category: "Seafood"
    },
    {
      id: 4,
      title: "Hearty Beef Stew",
      image: "/step8.webp",
      difficulty: "Intermediate",
      time: "2 hours",
      category: "Meat"
    },
    {
      id: 5,
      title: "Veggie-Packed Stir-Fry",
      image: "/step8.webp",
      difficulty: "Easy",
      time: "20 mins",
      category: "Asian"
    },
    {
      id: 6,
      title: "Lemon Garlic Roasted Chicken",
      image: "/step8.webp",
      difficulty: "Intermediate",
      time: "1 hour",
      category: "Meat"
    }
  ];

  const [filteredRecipes, setFilteredRecipes] = useState(featuredRecipes);
  const navigate = useNavigate();

  const parseTime = (timeStr) => {
    if (timeStr.includes('hours')) {
      return parseInt(timeStr) * 60;
    }
    if (timeStr.includes('hour')) {
      return 60;
    }
    return parseInt(timeStr);
  };

  const handleFilterChange = (filters) => {
    const filtered = featuredRecipes.filter(recipe => {
      const matchesDifficulty = filters.difficulty === 'all' || 
        recipe.difficulty.toLowerCase() === filters.difficulty;
        
      let matchesTime = true;
      if (filters.time !== 'all') {
        const recipeMinutes = parseTime(recipe.time);
        switch(filters.time) {
          case '< 30 mins':
            matchesTime = recipeMinutes < 30;
            break;
          case '30-60 mins':
            matchesTime = recipeMinutes >= 30 && recipeMinutes <= 60;
            break;
          case '> 60 mins':
            matchesTime = recipeMinutes > 60;
            break;
          default:
            matchesTime = true;
        }
      }

      const matchesCategory = filters.category === 'all' || 
        recipe.category.toLowerCase() === filters.category;

      return matchesDifficulty && matchesTime && matchesCategory;
    });

    setFilteredRecipes(filtered);
  };

  return (
    <div>
      {/* Banner */}
      <div className="banner w-full bg-cover bg-center py-20">
        <div className="banner-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="welcome-message text-5xl font-bold mb-6">
            Cook with Confidence
          </h1>
          <p className="text-white text-xl max-w-2xl mx-auto">
            Discover delicious recipes and elevate your cooking skills with our step-by-step guides
          </p>
        </div>
      </div>

      {/* About Us */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="recipe-title text-4xl font-bold mb-8 text-emerald-900">About Us</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          We are a team of passionate home cooks who believe that cooking can be a joyful and
          empowering experience. Our mission is to provide you with delicious recipes and
          step-by-step guides to help you unlock your culinary potential.
        </p>
      </section>

      {/* Featured Recipes */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="recipe-title text-4xl font-bold mb-8 text-emerald-900">Featured Recipes</h2>
        
        <RecipeFilters onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-emerald-100 overflow-hidden cursor-pointer"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-white">
                <h3 className="font-medium text-xl text-emerald-900 mb-2">{recipe.title}</h3>
                <div className="flex gap-4 text-sm text-slate-600">
                  <span>{recipe.difficulty}</span>
                  <span>•</span>
                  <span>{recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="recipe-title text-4xl font-bold mb-8 text-emerald-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-emerald-100 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-emerald-50 text-emerald-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-emerald-900">Step-by-Step Guides</h3>
            </div>
            <p className="text-slate-600">
              Our detailed step-by-step guides will walk you through every recipe, ensuring your
              cooking success.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-emerald-100 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-emerald-50 text-emerald-600">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-emerald-900">Cooking Tips</h3>
            </div>
            <p className="text-slate-600">
              Learn valuable cooking techniques and tricks to elevate your skills and impress your
              friends and family.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-emerald-100 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-emerald-50 text-emerald-600">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-emerald-900">Ingredient Insights</h3>
            </div>
            <p className="text-slate-600">
              Discover the best ingredients to use and how to source them for your culinary
              adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="max-w-7xl mx-auto px-4 mt-16 mb-16">
        <h2 className="recipe-title text-4xl font-bold mb-8 text-emerald-900">Contact Us</h2>
        <form className="bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-emerald-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-emerald-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-emerald-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-all"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;