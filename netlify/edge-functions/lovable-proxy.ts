import type { Context, Config } from '@netlify/edge-functions'

const UPSTREAM_ORIGIN = 'https://reebsynapsee.lovable.app'

const HOP_BY_HOP_HEADERS = ['content-length', 'content-encoding', 'transfer-encoding', 'connection']

const BADGE_REMOVER_SCRIPT = `
<script>
(function () {
  var BADGE_ID = 'lovable-badge';

  function hideBadge() {
    var el = document.getElementById(BADGE_ID);
    if (!el) return false;
    el.style.setProperty('display', 'none', 'important');
    return true;
  }

  if (!hideBadge()) {
    var observer = new MutationObserver(function () {
      if (hideBadge()) {
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
</script>
`

function injectBeforeBodyClose(html: string): string {
  const closeIndex = html.toLowerCase().lastIndexOf('</body>')
  if (closeIndex === -1) {
    return html + BADGE_REMOVER_SCRIPT
  }
  return html.slice(0, closeIndex) + BADGE_REMOVER_SCRIPT + html.slice(closeIndex)
}

export default async (req: Request, context: Context) => {
  const url = new URL(req.url)
  const upstreamUrl = new URL(url.pathname + url.search, UPSTREAM_ORIGIN)

  const upstreamHeaders = new Headers(req.headers)
  upstreamHeaders.delete('host')

  const isBodylessMethod = req.method === 'GET' || req.method === 'HEAD'

  let upstreamResponse: Response
  try {
    upstreamResponse = await fetch(upstreamUrl, {
      method: req.method,
      headers: upstreamHeaders,
      body: isBodylessMethod ? undefined : req.body,
      ...(isBodylessMethod ? {} : { duplex: 'half' }),
    } as RequestInit)
  } catch {
    return new Response('Bad gateway', { status: 502 })
  }

  const contentType = upstreamResponse.headers.get('content-type') || ''
  if (!contentType.includes('text/html')) {
    return upstreamResponse
  }

  const html = await upstreamResponse.text()
  const modifiedHtml = injectBeforeBodyClose(html)

  const responseHeaders = new Headers(upstreamResponse.headers)
  for (const header of HOP_BY_HOP_HEADERS) {
    responseHeaders.delete(header)
  }

  return new Response(modifiedHtml, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers: responseHeaders,
  })
}

export const config: Config = {
  path: '/*',
}
