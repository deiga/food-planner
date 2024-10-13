import { getAvailableRecipes, updateAvailableRecipes } from './db';

export const randomRecipe = async () => {
  const availableRecipes = await getAvailableRecipes();
  const recipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
  await updateAvailableRecipes(recipe);
  return recipe;
};
