export const truncate = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

export const removeTrailingSlash = (url: string) => {
  return url.replace(/\/$/, '')
}

export const shortenAddress = (address: string) => {
  return `${address.slice(0, 8)}...${address.slice(-6)}`
}
