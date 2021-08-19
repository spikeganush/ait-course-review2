export const dateParser = (num) => {
  let options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  let timestamp = Date.parse(num)

  let date = new Date(timestamp).toLocaleTimeString('en-GB', options)

  return date.toString()
}

export const timestampParser = (num) => {
  let options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  let date = new Date(num).toLocaleDateString('en-GB', options)

  return date.toString()
}

// check if a field is empty or not
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}
