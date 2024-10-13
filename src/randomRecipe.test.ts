import { describe, expect, it } from 'bun:test';
import { randomRecipe } from './randomRecipe';
import { recipes } from './recipes';

describe('randomRecipe', () => {
  it('should return a string which is a recipe', async () => {
    const retValue = await randomRecipe();
    expect(retValue).toBeString();
    expect(recipes).toContain(retValue);
  });

  it('should return a different string each time', async () => {
    const retValue1 = await randomRecipe();
    const retValue2 = await randomRecipe();
    expect(retValue1).not.toEqual(retValue2);
  });
});
