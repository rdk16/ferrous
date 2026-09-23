import chalk from "chalk";

export function printf(
  content:
    | string
    | number
    | boolean
    | Date
    | Array<string | number | boolean | Date>,
  timestamp?: boolean,
) {
  if (timestamp === true) {
    return console.log(
      `[${new Date().getDay()}/${new Date().getMonth()}/${
        new Date().getFullYear()
      }]: ` + content,
    );
  }
  return console.log(content);
}
