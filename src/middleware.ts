import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ACCESS_COOKIE = 'shb_access'
const UNLOCK_PATH = '/authorised'
const BLOCKED_COUNTRY = 'IN'

const BLOCKED_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Savior's Heartbeat Ministries</title>
<style>
  body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
         font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
         background:#0f172a; color:#f1f5f9; text-align:center; padding:24px; box-sizing:border-box; }
  .card { max-width: 480px; }
  h1 { font-size: 1.5rem; margin-bottom: 0.75rem; }
  p { color:#94a3b8; line-height:1.6; margin:0; }
</style>
</head>
<body>
  <div class="card">
    <h1>This site is currently not available in your region</h1>
    <p>We're sorry for the inconvenience. Please check back later.</p>
  </div>
</body>
</html>`

function isUnlocked(request: NextRequest) {
  return request.cookies.get(ACCESS_COOKIE)?.value === '1'
}

function getCountry(request: NextRequest) {
  return request.geo?.country ?? request.headers.get('x-vercel-ip-country') ?? ''
}

export function middleware(request: NextRequest) {
  if (getCountry(request) !== BLOCKED_COUNTRY || isUnlocked(request)) {
    return NextResponse.next()
  }

  if (request.nextUrl.pathname === UNLOCK_PATH) {
    const response = NextResponse.redirect(new URL('/', request.url))
    // No maxAge/expires -> session cookie, cleared when the browser closes
    response.cookies.set(ACCESS_COOKIE, '1', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    })
    return response
  }

  return new NextResponse(BLOCKED_HTML, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
