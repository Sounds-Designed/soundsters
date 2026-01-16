export default eventHandler(async (event) => {
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true })
  return fetch(`${url.origin}/contributors.json`).then(res => res.json())
})
