export function getyyyymmddhhMMss(date) {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset()) // 修正时区偏移
  return date.toISOString().slice(0, -5).replace(/[T]/g, ' ')
}
