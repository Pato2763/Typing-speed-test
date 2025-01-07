import fs from "fs";

export const getTestText = (difficulty) => {
  const data = JSON.parse(fs.readFileSync("text.json", "utf-8"));
  return data.typing_tests.filter((test) => difficulty === test.difficulty);
};
