type RuntimeConfig = {
  appName?: string;
  apiBaseUrl?: string;
  useMocks?: boolean;
};

declare global {
  // eslint-disable-next-line no-var
  var __AIOPS_CONFIG__: RuntimeConfig | undefined;
}

export function getRuntimeConfig(): RuntimeConfig {
  return globalThis.__AIOPS_CONFIG__ ?? {};
}
