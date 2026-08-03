const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const clientId = env.GITHUB_CLIENT_ID.trim();
    const clientSecret = env.GITHUB_CLIENT_SECRET.trim();

    if (url.pathname === '/auth') {
      const scope = url.searchParams.get('scope') || 'repo,user';
      const redirectUri = `${url.origin}/callback?provider=github`;

      const authorizeUrl = new URL(GITHUB_AUTHORIZE_URL);
      authorizeUrl.searchParams.set('response_type', 'code');
      authorizeUrl.searchParams.set('client_id', clientId);
      authorizeUrl.searchParams.set('redirect_uri', redirectUri);
      authorizeUrl.searchParams.set('scope', scope);
      authorizeUrl.searchParams.set('state', crypto.randomUUID());

      return Response.redirect(authorizeUrl.toString(), 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing code', { status: 400 });
      }

      const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      });

      const tokenData = await tokenResponse.json();

      return renderCallbackPage(
        tokenData.error
          ? { provider: 'github', error: tokenData.error_description || tokenData.error }
          : { provider: 'github', token: tokenData.access_token },
      );
    }

    return new Response('Not found', { status: 404 });
  },
};

function renderCallbackPage({ provider, token, error }) {
  const message = error
    ? `authorization:${provider}:error:${JSON.stringify({ error })}`
    : `authorization:${provider}:success:${JSON.stringify({ token, provider })}`;

  const html = `<!DOCTYPE html>
<html>
<body>
<script>
  (function() {
    function receiveMessage(e) {
      window.opener.postMessage(
        ${JSON.stringify(message)},
        e.origin
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:${provider}', '*');
  })();
</script>
</body>
</html>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
