function getPassword() {
  try { return Netlify.env.get('SITE_PASSWORD') || 'emerging100' } catch (_) {}
  try { return Deno.env.get('SITE_PASSWORD') || 'emerging100' } catch (_) {}
  return 'emerging100'
}

function decodeBasic(header) {
  try {
    const b64 = header.slice('Basic '.length)
    const decoded = atob(b64)
    const colon = decoded.indexOf(':')
    return colon !== -1 ? decoded.slice(colon + 1) : decoded
  } catch (_) {
    return ''
  }
}

export default async function handler(req, context) {
  const expected = getPassword()
  const authHeader = req.headers.get('Authorization') || ''

  if (authHeader.startsWith('Basic ') && decodeBasic(authHeader) === expected) {
    return context.next()
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Emerging 100 ATL — Members Only"',
    },
  })
}
