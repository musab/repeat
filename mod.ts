export function repeat(input: string, repeatCount: number) {
  const MAX_SAFE_INTEGER = 9007199254740991;
  let result = "";

  if (
    !input ||
    repeatCount < 1 ||
    repeatCount > MAX_SAFE_INTEGER ||
    typeof input != "string"
  ) {
    return input;
  }

  for (let start = 0; start < repeatCount; start++) {
    result += input;
  }

  return result;
}
