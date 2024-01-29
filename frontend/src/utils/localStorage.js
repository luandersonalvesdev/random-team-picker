const getFromLs = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

const setToLs = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const removeToLs = (key) => {
  localStorage.removeItem(key)
}

export { getFromLs, setToLs, removeToLs }
