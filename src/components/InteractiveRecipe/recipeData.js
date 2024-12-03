// src/components/InteractiveRecipe/recipeData.js
export const recipe = {
    title: "Classic Bolognese Pasta",
    difficulty: "Intermediate",
    prepTime: "30 mins",
    cookTime: "2.5 hours",
    servings: "6 portions",
    steps: [
      {
        number: 1,
        instructions: "Prepare your mise en place. Finely dice carrots, celery, and onions. Measure other ingredients.",
        image: "/step0.webp",
        ingredients: [
          {
            name: "Ground beef (80/20)",
            image: "/ground-beef.jpg",
            measurements: {
              weight: {
                oz: "18 oz",
                g: "500 g"
              }
            }
          },
          {
            name: "Mirepoix (carrots, celery, onions)",
            image: "/mirepoix.jpg",
            measurements: {
              weight: {
                oz: "14 oz",
                g: "400 g"
              }
            },
            tips: "Equal parts carrots and celery, double amount of onions"
          }
        ],
        equipment: [
          {
            name: "Large Dutch oven",
            alternative: "Heavy-bottomed pot"
          },
          {
            name: "Chef's knife",
            alternative: "Food processor"
          }
        ]
      },
      {
        number: 2,
        instructions: "Heat olive oil, add mirepoix. Cook until vegetables soften and onions become translucent.",
        image: "/step1.webp",
        timer: 10,
        ingredients: [
          {
            name: "Olive oil",
            image: "/olive-oil.webp",
            measurements: {
              volume: {
                cups: "2 tbsp",
                ml: "30 ml"
              }
            }
          }
        ],
        troubleshooting: [
          "If browning occurs, reduce heat",
          "If too dry, add more oil"
        ]
      },
      {
        number: 3,
        instructions: "Add ground beef, break into small pieces. Cook until no pink remains.",
        image: "/step3.webp",
        timer: 8,
        technique: "Use wooden spoon to break meat finely"
      },
      {
        number: 4,
        instructions: "Add tomato paste, cook until darkened. Add wine, reduce by half.",
        image: "/step5.webp",
        timer: 5,
        ingredients: [
          {
            name: "Tomato paste",
            image: "/tomato-paste.png",
            measurements: {
              volume: {
                cups: "2 tbsp",
                ml: "30 ml"
              }
            }
          },
          {
            name: "White wine",
            image: "/white-wine.webp",
            measurements: {
              volume: {
                cups: "1 cup",
                ml: "240 ml"
              }
            }
          }
        ]
      },
      {
        number: 5,
        instructions: "Add tomatoes, milk, seasonings. Simmer covered.",
        image: "/step6.webp",
        timer: 150,
        ingredients: [
          {
            name: "Crushed tomatoes",
            image: "/crushed-tomato.jpg",
            measurements: {
              volume: {
                cups: "2 cups",
                ml: "480 ml"
              }
            }
          },
          {
            name: "Whole milk",
            image: "/milk.avif",
            measurements: {
              volume: {
                cups: "1 cup",
                ml: "240 ml"
              }
            }
          }
        ],
        troubleshooting: [
          "Too thick: add pasta water",
          "Too thin: simmer uncovered"
        ]
      },
      {
        number: 6,
        instructions: "Cook pasta in salted water until al dente. Reserve 1 cup pasta water.",
        image: "/step7.webp",
        timer: 12,
        ingredients: [
          {
            name: "Pasta",
            image: "/pasta.webp",
            measurements: {
              weight: {
                oz: "16 oz",
                g: "450 g"
              }
            }
          }
        ]
      },
      {
        number: 7,
        instructions: "Combine pasta with sauce, add pasta water as needed. Top with Parmigiano-Reggiano.",
        image: "/step8.webp",
        timer: 2,
        technique: "Finish cooking pasta in sauce for better flavor absorption"
      }
    ]
  };