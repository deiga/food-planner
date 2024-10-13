import { JSONFilePreset } from 'lowdb/node';
import { recipes } from './recipes';

type Data = {
  recipes: string[];
  availableRecipes?: string[];
};

const defaultData: Data = { recipes };

// Read or create db.json
const db = await JSONFilePreset<Data>('../db.json', defaultData);

export async function getAvailableRecipes() {
  await db.read();
  return db.data?.availableRecipes ?? [];
}

export async function updateAvailableRecipes(usedRecipes: string[]) {
  await db.read();
  if (!db.data?.availableRecipes) {
    db.data.availableRecipes = db.data.recipes;
  }
  db.data.availableRecipes = db.data.availableRecipes.filter(
    (recipe) => !usedRecipes.includes(recipe),
  );
  await db.write();
}
