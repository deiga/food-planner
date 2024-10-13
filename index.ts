import { randomRecipe } from './src/randomRecipe';

const weeksRecipes = new Set();

while (weeksRecipes.size < 5) {
  weeksRecipes.add(await randomRecipe());
}

console.log(`This week's recipes are: ${Array.from(weeksRecipes).join(', ')}`);
