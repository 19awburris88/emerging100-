export default async function handler(req, context) {
  const authHeader = req.headers.get('Authorization')

  if (authHeader && authHeader.startsWith('Basic ')) {
    const decoded = atob(authHeader.slice(6))
    const password = decoded.split(':').slice(1).join(':')
    const expected = Deno.env.get('SITE_PASSWORD') || 'emerging100'
    if (password === expected) return context.next()
  }

  return new Response('Unauthorized — Emerging 100 ATL Internal Playbook', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Emerging 100 ATL — Internal Playbook"',
    },
  })
}

export const config = { path: '/*' }
