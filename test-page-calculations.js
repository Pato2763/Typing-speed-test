export const getAccuracy = (correctWrongChars) => {
  if (!correctWrongChars.length) return 100;

  const totalChars = correctWrongChars.length;
  const mistakes = correctWrongChars.filter(
    (index) => index === "incorrect-text"
  ).length;

  const percentageAccuracy = ((totalChars - mistakes) / totalChars) * 100;
  return Math.round(percentageAccuracy);
};
export const getWpm = (chars, timeLeft) => {
  if (timeLeft >= 60) return 0;
  console.log(chars, timeLeft);
  console.log(Math.round(chars / 4.7 / ((60 - timeLeft) / 60)));
  return Math.round(chars / 4.7 / ((60 - timeLeft) / 60));
};
