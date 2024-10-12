const featureFlags = {};

function isFeatureEnabled(feature: keyof typeof featureFlags) {
  return featureFlags[feature];
}

export { isFeatureEnabled };
