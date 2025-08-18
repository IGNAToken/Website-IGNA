export const debug = (message: string, data: unknown) => {
  const searchParams = new URLSearchParams(window.location.search)
  const isDebugMode = searchParams.get('debug') === 'true'
  if (!import.meta.env.PROD || isDebugMode) {
    console.log(message, data)
  }
}
