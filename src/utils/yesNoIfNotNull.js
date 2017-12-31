const yesNoIfNotNull = (condition = null, yes = 'YES', no = 'NO') => {
  if (condition === null) return null
  return condition ? yes : no
}

export default yesNoIfNotNull
