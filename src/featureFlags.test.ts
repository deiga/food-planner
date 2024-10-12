import { describe, expect, it, mock } from 'bun:test';
import { isFeatureEnabled } from './featureFlags';

describe('isFeatureEnabled', () => {
  it('isFeatureEnabled should return false for unknown feature', () => {
    // @ts-expect-error - testing unknown feature
    const retValue = isFeatureEnabled('test');
    expect(retValue).toBeFalsy();
  });

  it('isFeatureEnabled should return true for enabled feature', () => {
    mock.module('./config', () => ({
      default: {
        test: true,
      },
    }));
    // @ts-expect-error - testing mocked feature flag
    const retValue = isFeatureEnabled('test');
    expect(retValue).toBeTruthy();
  });

  it('isFeatureEnabled should return true for enabled feature from env', () => {
    process.env.FEATURE_FLAGS = 'test';
    // @ts-expect-error - testing mocked feature flag
    const retValue = isFeatureEnabled('test');
    expect(retValue).toBeTruthy();
  });
});
