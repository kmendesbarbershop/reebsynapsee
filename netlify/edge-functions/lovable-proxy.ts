import type { Context, Config } from '@netlify/edge-functions'

const UPSTREAM_ORIGIN = 'https://reebsynapsee.lovable.app'

const HOP_BY_HOP_HEADERS = ['content-length', 'content-encoding', 'transfer-encoding', 'connection']

const BADGE_REMOVER_SCRIPT = `
<script>
(function () {
  function shouldHide(el) {
    if (!el || el.nodeType !== 1) return false;
    var href = '';
    if (el.getAttribute) {
      href = el.getAttribute('href') || el.getAttribute('src') || '';
    }
    if (href.indexOf('lovable.dev') !== -1) return true;
    if (el.childElementCount <= 2) {
      var text = (el.textContent || '').trim();
      if (text === 'Lovable' || text.indexOf('Edit with Lovable') !== -1) return true;
    }
    return false;
  }

  function hideElement(el) {
    el.style.setProperty('display', 'none', 'important');
    if (el.setAttribute) el.setAttribute('data-lovable-badge-hidden', 'true');
  }

  function scan(root) {
    if (!root || root.nodeType !== 1 && root.nodeType !== 9) return;
    if (root.nodeType === 1 && shouldHide(root)) {
      hideElement(root);
      return;
    }
    if (!root.querySelectorAll) return;
    var candidates = root.querySelectorAll('a, [href], [src], div, span, button, footer, aside, section');
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (el.getAttribute && el.getAttribute('data-lovable-badge-hidden') === 'true') continue;
      if (shouldHide(el)) hideElement(el);
    }
  }

  scan(document);

  var observer = new MutationObserver(function (mutations) {
    for (var m = 0; m < mutations.length; m++) {
      var addedNodes = mutations[m].addedNodes;
      for (var n = 0; n < addedNodes.length; n++) {
        scan(addedNodes[n]);
      }
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
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
