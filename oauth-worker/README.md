
# Decap CMS GitHub OAuth proxy

Replaces the third-party proxy (`decap-proxy.olivier-barais.workers.dev`) with one you control,
since GitHub Pages can't keep a `client_secret` server-side to complete the OAuth exchange itself.

**Current deployment**: `https://aim-pro-decap-oauth.aim-pro-decap.workers.dev`
(GitHub OAuth App registered under `https://github.com/organizations/aim-pro-eu/settings/applications`)

## Deploy order (important: worker first, then the GitHub App)

The GitHub OAuth App's callback URL must match the worker's URL, but the worker's URL
(`<name>.<your-subdomain>.workers.dev`) isn't known until you deploy once. So:

### 1. Install deps and log in to your own Cloudflare account

```sh
cd oauth-worker
npm install
npx wrangler login
```

### 2. First deploy (secrets not set yet, that's fine)

```sh
npx wrangler deploy
```

This prints the worker's URL, e.g. `https://aim-pro-decap-oauth.<your-subdomain>.workers.dev`.

### 3. Create the GitHub OAuth App under the `aim-pro-eu` org

Go to `https://github.com/organizations/aim-pro-eu/settings/applications/new` and fill in:
- **Homepage URL**: `https://aim-pro-eu.github.io`
- **Authorization callback URL**: `https://aim-pro-decap-oauth.<your-subdomain>.workers.dev/callback?provider=github`
  (use the exact URL printed in step 2, `?provider=github` included)

Save it, then generate a **Client Secret**. Note both the Client ID and Client Secret.

### 4. Set the secrets on the worker

```sh
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
```

Pass only the secret **name** on the command line (`GITHUB_CLIENT_ID`, not the value itself) —
each command then prompts `Enter a secret value:`, and that's where you paste the actual
Client ID / Client Secret. No redeploy needed after this.

Run `npx wrangler secret list` afterwards to confirm both `GITHUB_CLIENT_ID` and
`GITHUB_CLIENT_SECRET` are listed (delete anything else, e.g. a secret accidentally
named after the pasted value itself).

### 5. Point Decap CMS at the new proxy

In `public/admin/config.yml`, set:

```yaml
backend:
  name: github
  repo: aim-pro-eu/aim-pro-eu.github.io
  branch: main
  base_url: https://aim-pro-decap-oauth.<your-subdomain>.workers.dev
  auth_endpoint: /auth
```

## Troubleshooting

**GitHub returns a 404 on the `authorize` redirect**: the `client_id` query param GitHub
received doesn't match any registered app. Check the URL in the browser — a `+` inside
`client_id=` decodes to a space, which usually means a stray leading/trailing space got
pasted into the `GITHUB_CLIENT_ID` secret. `worker.js` trims both secrets defensively, but
if you still see this, redo `wrangler secret put GITHUB_CLIENT_ID` and paste carefully.

**"Be careful! The redirect_uri is not associated with this application"**: the callback
URL registered on the GitHub OAuth App doesn't exactly match `<worker-url>/callback?provider=github`
(query string included).
