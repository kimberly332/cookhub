// Import dependencies
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Timer, Info, Scale, Globe, Volume2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { recipe } from './recipeData';
import RecipeReviews from '../RecipeReviews';
import confetti from 'canvas-confetti';
import './InteractiveRecipe.css';



const InteractiveRecipe = () => {
// State management
 const [currentStep, setCurrentStep] = useState(0);
 const [completedSteps, setCompletedSteps] = useState(new Set());
 const [units, setUnits] = useState({
   volume: 'cups',
   weight: 'oz',
   temperature: 'F'
 });
 const [isCompleted, setIsCompleted] = useState(false);

// Navigation handlers
const handleNext = () => {
    if (currentStep < recipe.steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

    // Get current step data, null for cover page
    const currentStepData = currentStep === 0 ? null : recipe.steps[currentStep - 1];

// Step completion toggle handler
 const toggleStepComplete = () => {
   const newCompleted = new Set(completedSteps);
   if (newCompleted.has(currentStep)) {
     newCompleted.delete(currentStep);
   } else {
     newCompleted.add(currentStep);
   }
   setCompletedSteps(newCompleted);
 };

 // Measurement display helper
 const getDisplayMeasurement = (ingredient) => {
   let measurement = '';
   if (ingredient.measurements.weight) {
     measurement = ingredient.measurements.weight[units.weight];
   }
   if (ingredient.measurements.volume) {
     if (measurement) {
       measurement += ` (${ingredient.measurements.volume[units.volume]})`;
     } else {
       measurement = ingredient.measurements.volume[units.volume];
     }
   }
   return measurement;
 };

 // Units toggle handler
 const toggleUnits = (type) => {
   setUnits(prev => ({
     ...prev,
     [type]: type === 'volume' ? 
       (prev.volume === 'cups' ? 'ml' : 'cups') :
       type === 'weight' ?
       (prev.weight === 'oz' ? 'g' : 'oz') :
       (prev.temperature === 'F' ? 'C' : 'F')
   }));
 };

// Recipe completion handler with confetti effect
 const handleComplete = () => {
    confetti({
        particleCount: 200,
        spread: 200,
        origin: { y: 0.6 }
      });
      setIsCompleted(true);
  };

    // Navigation buttons logic
  const getNavigationButtons = () => {
    // Cover page navigation
    if (currentStep === 0) {
      return ( /* Let's Start button */
        <>
          <div />
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
          >
            <span className="font-medium">Let's Start</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      );
    }

    // Last step navigation with Done/Complete state
    if (currentStep === recipe.steps.length - 1) {
        return ( /* Previous + Done/Complete buttons */
          <>
            <button onClick={handlePrev}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Previous</span>
        </button>
        {isCompleted ? (
          <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-100 text-green-600">
            <span className="font-medium">Recipe Complete! 🎉</span>
            <Check className="w-5 h-5" />
          </div>
        ) : (
          <button onClick={handleComplete}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all">
            <span className="font-medium">Done</span>
            <Check className="w-5 h-5" />
          </button>
            )}
          </>
        );
      }

    // Regular step navigation
    return ( /* Previous + Next buttons */
      <>
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Previous</span>
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
        >
          <span className="font-medium">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </>
    );
  };

// Component render structure
 return (
    <Card className="w-full max-w-3xl mx-auto my-8 bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-sm shadow-xl rounded-2xl border-0 recipe-content">
      {currentStep === 0 ? (
        <>
          <CardHeader className="space-y-6">
            <div className="text-center">
            <h1 className="recipe-title text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
  {recipe.title}
</h1>
              <p className="text-slate-600 mb-8">A classic Italian meat sauce made with love</p>
              
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                <img
                  src="/step8.webp"
                  alt={recipe.title}
                  className="object-cover w-full h-full"
                />
              </div>
   
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-all border border-emerald-100">
                <h2 className="font-semibold text-lg mb-4 text-emerald-900">Details</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <span className="font-medium">{recipe.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prep Time:</span>
                      <span className="font-medium">{recipe.prepTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cook Time:</span>
                      <span className="font-medium">{recipe.cookTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Time:</span>
                      <span className="font-medium">3 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Servings:</span>
                      <span className="font-medium">{recipe.servings}</span>
                    </div>
                  </div>
                </div>
   
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="font-semibold text-lg mb-4 text-emerald-900">Total Ingredients</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Ground beef (80/20)</span>
                      <span className="font-medium">500g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mirepoix mix</span>
                      <span className="font-medium">400g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tomato paste</span>
                      <span className="font-medium">2 tbsp</span>
                    </li>
                    <li className="flex justify-between">
                      <span>White wine</span>
                      <span className="font-medium">240ml</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Crushed tomatoes</span>
                      <span className="font-medium">480ml</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Whole milk</span>
                      <span className="font-medium">240ml</span>
                    </li>
                  </ul>
                </div>
   
                <div className="p-6 bg-gray-50 rounded-lg md:col-span-2">
                  <h2 className="font-semibold text-lg mb-4 text-emerald-900">Required Equipment</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Essential:</h3>
                      <ul className="pl-4 space-y-1">
                        <li>Large Dutch oven</li>
                        <li>Chef's knife</li>
                        <li>Cutting board</li>
                        <li>Measuring cups/spoons</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Alternatives:</h3>
                      <ul className="pl-4 space-y-1">
                        <li>Heavy-bottomed pot</li>
                        <li>Food processor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex flex-col p-6">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
            >
              <span className="font-medium">Let's Start Cooking</span>
              <ChevronRight className="w-6 h-6" />
            </button>
            <RecipeReviews />
          </CardFooter>
        </>
      ) : (
        <>
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
              <h1 className="recipe-title text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
  {recipe.title}
</h1>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>Difficulty: {recipe.difficulty}</span>
                  <span>Prep: {recipe.prepTime}</span>
                  <span>Cook: {recipe.cookTime}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => toggleUnits('weight')}
                 className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
                  aria-label="Toggle weight units"
                >
                  <Scale className="w-4 h-4" />
                  <span>{units.weight.toUpperCase()}</span>
                </button>
                
                <button
                  onClick={() => toggleUnits('volume')}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
                  aria-label="Toggle volume units"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{units.volume === 'cups' ? 'Cups' : 'ML'}</span>
                </button>
              </div>
            </div>
   
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / recipe.steps.length) * 100}%`
                }}
              />
            </div>
          </CardHeader>
   
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg mb-4 text-emerald-900">Step {currentStepData.number}</h2>
              <button
                onClick={toggleStepComplete}
                className={`p-4 rounded-full transition-colors ${
                  completedSteps.has(currentStep)
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                <Check className="w-6 h-6" />
              </button>
            </div>
   
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <img
                src={currentStepData.image}
                alt={`Step ${currentStepData.number}`}
                className="object-cover w-full h-full"
              />
            </div>
   
            <div className="space-y-4">
              <p className="text-slate-600 text-lg leading-relaxed">{currentStepData.instructions}</p>
              
              {currentStepData.technique && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p>{currentStepData.technique}</p>
                  </div>
                </div>
              )}
            </div>
   
            {currentStepData.ingredients && (
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Ingredients for this step:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentStepData.ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={ingredient.image || "/api/placeholder/200/200"}
                            alt={ingredient.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <span className="font-medium">{ingredient.name}</span>
                            <span className="text-gray-600">
                              {getDisplayMeasurement(ingredient)}
                            </span>
                          </div>
                          {ingredient.tips && (
                            <p className="text-sm text-slate-600 mt-2">{ingredient.tips}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
   
            {currentStepData.equipment && (
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Equipment needed:</h3>
                {currentStepData.equipment.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {item.alternative && (
                      <p className="text-sm text-slate-600 mt-2">Alternative: {item.alternative}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
   
            {currentStepData.troubleshooting && (
              <div className="bg-yellow-50 p-4 rounded-lg space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Info className="w-5 h-5 text-yellow-600" />
                  Troubleshooting
                </h3>
                <ul className="space-y-2">
                  {currentStepData.troubleshooting.map((tip, index) => (
                    <li key={index} className="text-gray-700">• {tip}</li>
                  ))}
                </ul>
              </div>
            )}
   
            {currentStepData.timer && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Timer className="w-6 h-6 text-blue-600" />
                  <span className="font-medium text-lg">
                    Timer: {currentStepData.timer} minutes
                  </span>
                </div>
              </div>
            )}
          </CardContent>
   
          <CardFooter className="flex justify-between p-6">
            {getNavigationButtons()}
          </CardFooter>
        </>
      )}
    </Card>
   );
};

export default InteractiveRecipe;