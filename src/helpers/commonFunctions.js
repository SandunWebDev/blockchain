export function titleCase(sentence) {
  if (!sentence) return "";

  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
