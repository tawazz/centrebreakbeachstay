function assetCandidates(pathname) {
  const candidates = [pathname];

  if (pathname.endsWith("/")) {
    candidates.push(`${pathname}index.html`);
  } else {
    candidates.push(`${pathname}/index.html`, `${pathname}.html`);
  }

  return [...new Set(candidates)];
}

export default {
  async fetch(request, env) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    const requestUrl = new URL(request.url);

    if (requestUrl.pathname === "/sitemap_index.xml") {
      requestUrl.pathname = "/sitemap.xml";
      return Response.redirect(requestUrl, 308);
    }

    if (!env?.ASSETS?.fetch) {
      return new Response("Static asset binding unavailable", { status: 500 });
    }

    for (const pathname of assetCandidates(requestUrl.pathname)) {
      const assetUrl = new URL(requestUrl);
      assetUrl.pathname = pathname;
      const response = await env.ASSETS.fetch(new Request(assetUrl, request));

      if (response.status !== 404) {
        return response;
      }
    }

    return new Response("Not found", { status: 404 });
  },
};
