
export function listAllFoodItems(data) {
  return data.map(food => food.foodname);
}
export function listFoodItemsByCategory(data, category) {
  return data.filter(food => food.category.toLowerCase() === category.toLowerCase()).map(food => food.foodname);
}
export function listFoodItemsAboveCalories(data, threshold) {
  return data.filter(food => food.calorie > threshold).map(food => food.foodname);
}
export function listFoodItemsBelowCalories(data, threshold) {
  return data.filter(food => food.calorie < threshold).map(food => food.foodname);
}
export function listFoodItemsByProtein(data) {
  return data.slice().sort((a, b) => b.protiens - a.protiens).map(food => food.foodname);
}
export function listFoodItemsByCarbohydrate(data) {
  return data.slice().sort((a, b) => a.cab - b.cab).map(food => food.foodname);
}
