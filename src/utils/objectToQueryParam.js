export function toQueryParam (obj) {
  return Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&')
}