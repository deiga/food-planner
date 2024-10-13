import { JSONFilePreset } from 'lowdb/node';
import { recipes } from './recipes';

type Data = {
  recipes: typeof recipes;
  availableRecipes?: (typeof recipes)[number][];
};

const defaultData: Data = { recipes };

// Read or create db.json
const db = await JSONFilePreset<Data>('../db.json', defaultData);

export async function getAvailableRecipes() {
  await db.read();
  if (!db.data?.availableRecipes) {
    db.data.availableRecipes = [...db.data.recipes];
  }
  return db.data?.availableRecipes;
}

export async function updateAvailableRecipes(usedRecipe: (typeof recipes)[number]) {
  await db.read();
  if (!db.data?.availableRecipes) {
    db.data.availableRecipes = [...db.data.recipes];
  }
  db.data.availableRecipes = db.data.availableRecipes.filter(
    (recipe) => recipe !== usedRecipe,
  );
  await db.write();
}

export async function resetAvailableRecipes() {
  db.data.availableRecipes = [...db.data.recipes];
  await db.write();
}
