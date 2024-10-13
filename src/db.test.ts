import { beforeEach, describe, expect, it } from 'bun:test';
import { getAvailableRecipes, resetAvailableRecipes, updateAvailableRecipes } from './db';
import { recipes } from './recipes';

describe('getAvailableRecipes', () => {
  it('getAvailableRecipes should return the contents of recipes when empty DB', async () => {
    const retValue = await getAvailableRecipes();
    expect(retValue).toEqual([...recipes]);
  });
});

describe('updateAvailableRecipes', () => {
  beforeEach(async () => {
    await resetAvailableRecipes();
  });

  it('should remove the used recipe from available recipes', async () => {
    await updateAvailableRecipes(recipes[0]);
    const availableRecipes = await getAvailableRecipes();
    expect(availableRecipes).not.toContain(recipes[0]);
    expect(availableRecipes).toEqual(recipes.slice(1));
  });

  it('should not fail when used recipes is empty', async () => {
    // @ts-expect-error
    await updateAvailableRecipes();
    const availableRecipes = await getAvailableRecipes();
    expect(availableRecipes).toEqual([...recipes]);
  });

  it('should not fail when used recipes contains a recipe not in recipes', async () => {
    // @ts-expect-error
    await updateAvailableRecipes('recipe1');
    const availableRecipes = await getAvailableRecipes();
    expect(availableRecipes).toEqual([...recipes]);
  });
});
