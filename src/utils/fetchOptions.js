const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Accepts', 'application/json')
headers.append('mode', 'same-origin')

const fetchOptions = { headers }

export default fetchOptions
