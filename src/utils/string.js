export function getFirstLine(string) {
  const endIndex = string.search(/\n/)
  if (endIndex === -1) {
    return string
  }
  return string.slice(0, endIndex)
}
