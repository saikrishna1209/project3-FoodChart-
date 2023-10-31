  import fs from 'fs';
  import * as foodFunctions from './foodFunctions.mjs';
 
  const foodData = JSON.parse(fs.readFileSync('food.json', 'utf-8'));

  console.log("All Food Items:");
  console.log(foodFunctions.listAllFoodItems(foodData));

  console.log("\nVegetables:");
  console.log(foodFunctions.listFoodItemsByCategory(foodData, 'Vegetable'));

  console.log("\nFruits:");
  console.log(foodFunctions.listFoodItemsByCategory(foodData, 'Fruit')); 

  console.log("\nProteins:");
  console.log(foodFunctions.listFoodItemsByCategory(foodData, 'Protein')); 

  console.log("\nNuts:");
  console.log(foodFunctions.listFoodItemsByCategory(foodData, 'Nuts')); 

  console.log("\nGrains:");
  console.log(foodFunctions.listFoodItemsByCategory(foodData, 'Grain')); 

  console.log("\nDairy:");
  console.log(foodFunctions.listFoodItemsByCategory(foodData, 'Dairy')); 

  console.log("\nCalories Above 100:");
  console.log(foodFunctions.listFoodItemsAboveCalories(foodData, 100));

  console.log("\nCalories Below 100:");
  console.log(foodFunctions.listFoodItemsBelowCalories(foodData, 100));

  console.log("\nFood Items by Protein (Highest to Lowest):");
  console.log(foodFunctions.listFoodItemsByProtein(foodData));

  console.log("\nFood Items by Carbohydrates (Lowest to Highest):");
  console.log(foodFunctions.listFoodItemsByCarbohydrate(foodData));
