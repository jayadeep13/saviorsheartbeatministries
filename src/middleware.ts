import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

function getCountry(request: NextRequest) {
  return request.geo?.country ?? request.headers.get('x-vercel-ip-country') ?? ''
}

function blockedResponse() {
  return new NextResponse(BLOCKED_HTML, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}

// True only when the request was triggered by clicking a link on this same site
// (e.g. navigating from /authorised into an inside page). Typing a URL directly,
// opening a bookmark, or reloading sends no same-origin referer, so it fails closed.
function cameFromThisSite(request: NextRequest) {
  const referer = request.headers.get('referer')
  if (!referer) return false
  try {
    return new URL(referer).origin === request.nextUrl.origin
  } catch {
    return false
  }
}

export function middleware(request: NextRequest) {
  if (getCountry(request) !== BLOCKED_COUNTRY) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // The bare home page is always hidden from India — no exceptions.
  if (pathname === '/') {
    return blockedResponse()
  }

  if (pathname === UNLOCK_PATH) {
    // Serve the home page content directly at /authorised (URL stays /authorised,
    // since "/" itself is always blocked).
    return NextResponse.rewrite(new URL('/', request.url))
  }

  // No cookies, nothing persisted: every other page is reachable only by being
  // navigated to from inside the site (i.e. starting at /authorised).
  if (cameFromThisSite(request)) {
    return NextResponse.next()
  }

  return blockedResponse()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
