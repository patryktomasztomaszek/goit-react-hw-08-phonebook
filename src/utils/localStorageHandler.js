export function setToLocalStorage(name, value) {
  return localStorage.setItem(name.toString(), JSON.stringify(value));
}
export function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name.toString()));
}
