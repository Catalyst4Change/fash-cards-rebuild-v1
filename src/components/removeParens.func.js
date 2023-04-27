export const removeParens = (string) => {
  const result = string.replace(/\s*\([^)]*\)/g, "")
  return result
}
