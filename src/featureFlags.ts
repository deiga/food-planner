import featureFlags from './config.json' with { type: 'json' };

function getFeatureFlagsFromEnv() {
  if (!process.env.FEATURE_FLAGS) {
    return [];
  }

  return process.env.FEATURE_FLAGS.split(',');
}

function isFeatureEnabled(feature: keyof typeof featureFlags) {
  return featureFlags[feature] || getFeatureFlagsFromEnv().includes(feature);
}

export { isFeatureEnabled };
