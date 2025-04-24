export default function useBaseUrl() {
  const runtimeConfig = useRuntimeConfig();
  return runtimeConfig.public.apiBase;
}
