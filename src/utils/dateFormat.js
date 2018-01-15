const pad = vv => (`${vv}`.length === 1 ? `0${vv}` : vv)

const dateFormat = date => {
  if (!(date instanceof Date)) throw new Error('Expected a date')
  const yyyy = date.getFullYear()
  const mm = pad(date.getMonth() + 1)
  const dd = pad(date.getDate())
  return `${yyyy}-${mm}-${dd}`
}

export default dateFormat
