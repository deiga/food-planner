declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FEATURE_FLAGS?: string;
    }
  }
}

export {};
