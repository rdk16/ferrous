export function isNumber(value: string): boolean {
  const _ = Number(value);
  if (isNaN(_)) return false;
  if (!/[0-9]/g.test(String(_))) return false;
  return true;
}
