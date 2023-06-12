export const strHandler = (num: number): string => {
  const arr = String(num).split("");
  let str = "фильмов";
  if (arr[arr.length - 1] === "1") {
    str = "фильм";
  }
  if (["2", "3", "4"].includes(arr[arr.length - 1])) {
    str = "фильма";
  }
  if (arr.length >= 2 && arr[arr.length - 2] === "1") {
    str = "фильмов";
  }
  return num + " " + str;
};
