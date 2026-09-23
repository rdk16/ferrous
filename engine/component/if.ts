import chalk from "chalk";

export function check(
  value: string | boolean | number,
  rule: string | boolean | number,
  op: ">" | "<" | "==" | "===" | "<=" | ">=",
): boolean {
  switch (op) {
    case "<":
      return value < rule;
    case "<=":
      return value <= rule;
    case "==":
      return value == rule;
    case "===":
      return value === rule;
    case ">":
      return value > rule;
    case ">=":
      return value >= rule;
    default:
      return false;
  }
}
