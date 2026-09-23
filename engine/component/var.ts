const variabels = new Map<string, string | number | boolean | Date | null>();

export function createVar(
  name: string,
  value: string | number | boolean | Date | null,
) {
  if (!variabels.has(name)) {
    variabels.set(name, value);
    return true;
  }
  return false;
}

export function updateVar(
  name: string,
  value: string | number | boolean | Date | null,
) {
  if (!variabels.has(name) || typeof value !== variabels.get(name)) {
    return false;
  }
  if (variabels.has(name) && typeof value === variabels.get(name)) return true;
}
