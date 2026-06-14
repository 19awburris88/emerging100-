export default async function handler(req, context) {
  const expected = Netlify.env.get('SITE_PASSWORD') || 'emerging100'
  const authHeader = req.headers.get('Authorization') || ''

  if (authHeader.startsWith('Basic ')) {
    try {
      const decoded = atob(authHeader.slice(6))
      const colon = decoded.indexOf(':')
      const password = colon !== -1 ? decoded.slice(colon + 1) : ''
      if (password === expected) return context.next()
    } catch (_) {
      // malformed base64 — fall through to 401
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Emerging 100 ATL — Internal Playbook"',
    },
  })
}
