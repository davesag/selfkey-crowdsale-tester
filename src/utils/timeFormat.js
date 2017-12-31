const plural = (word, count) => (count === 1 ? word : `${word}s`)

const timeFormat = (ms, longFormat = false) => {
  const seconds = parseInt(ms / 1000, 10)
  const hh = Math.floor(seconds / 3600)
  const mm = Math.floor((seconds - hh * 3600) / 60)
  const ss = seconds - hh * 3600 - mm * 60
  const pad = (num, type = null) => {
    const val = num < 10 ? `0${num}` : `${num}`
    const displayType = type ? plural(type, num) : null
    if (!num && displayType) return null
    return displayType ? `${num} ${displayType}` : val
  }

  return longFormat
    ? [pad(hh, 'hour'), pad(mm, 'minute'), pad(ss, 'second')].join(' ').trim()
    : [pad(hh), pad(mm), pad(ss)].join(':').trim()
}
export default timeFormat
