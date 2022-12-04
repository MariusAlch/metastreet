export function getQueryParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params);
}
