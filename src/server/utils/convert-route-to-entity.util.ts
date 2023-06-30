const mapping: Record<string, string> = {
  agencies: 'agency',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
