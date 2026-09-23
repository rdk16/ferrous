const variables = new Map<string, string | number | boolean | Date | null>();

export function createVar(
  name: string,
  value: string | number | boolean | Date | null,
) {
  if (!variables.has(name)) {
    variables.set(name, value);
    return true;
  }
  return false;
}

export function updateVar(
  name: string,
  value: string | number | boolean | Date | null,
) {
  const variable = variables.get(name);
  if (!variable) return false;
  const T = typeof variables.get(name);
  if (typeof variable !== T) return false;
  const R = variables.set(name, value);
  return true;
}
