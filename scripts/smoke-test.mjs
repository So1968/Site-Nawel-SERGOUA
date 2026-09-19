import assert from "node:assert/strict";

const baseUrl = new URL(process.env.SMOKE_TEST_BASE_URL ?? "http://127.0.0.1:3000");
const expectedSiteUrl = process.env.EXPECTED_SITE_URL ?? "https://example.com";
const username = process.env.BUREAU_USERNAME ?? "ci-user";
const password = process.env.BUREAU_PASSWORD ?? "ci-only-password-2026";
const expectHttpsRedirect = process.env.SMOKE_TEST_EXPECT_HTTPS === "1";
const trustedHttpsHeaders = expectHttpsRedirect ? { "x-forwarded-proto": "https" } : {};

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function request(pathname, init = {}) {
  let lastError;

  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      return await fetch(new URL(pathname, baseUrl), {
        ...init,
        headers: {
          ...trustedHttpsHeaders,
          ...init.headers,
        },
      });
    } catch (error) {
      lastError = error;
      await wait(250);
    }
  }

  throw lastError;
}

function assertHeader(response, name, expected) {
  assert.equal(response.headers.get(name), expected, `${name} doit valoir ${expected}`);
}

if (expectHttpsRedirect) {
  await request("/");
  const redirect = await fetch(new URL("/", baseUrl), { redirect: "manual" });
  assert.equal(redirect.status, 308, "HTTP doit être redirigé vers HTTPS en production");
  assert.ok(
    redirect.headers.get("location")?.startsWith("https://"),
    "La redirection HTTPS doit avoir une destination HTTPS",
  );
}

const home = await request("/");
assert.equal(home.status, 200, "La page publique doit répondre 200");
assertHeader(home, "x-content-type-options", "nosniff");
assert.ok(home.headers.get("content-security-policy"), "La CSP doit être présente");
assert.match(await home.text(), /Nawel Sergoua/);

const bureauUnauthorized = await request("/bureau");
assert.equal(bureauUnauthorized.status, 401, "Le bureau doit demander une authentification");
assert.ok(bureauUnauthorized.headers.get("www-authenticate"), "Le challenge Basic doit être présent");
assertHeader(bureauUnauthorized, "x-robots-tag", "noindex, nofollow, noarchive");

const authorization = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
const bureauAuthorized = await request("/bureau", {
  headers: { authorization },
});
assert.equal(bureauAuthorized.status, 200, "Le bureau doit être accessible avec les bons identifiants");
assertHeader(bureauAuthorized, "cache-control", "private, no-store");
assert.match(await bureauAuthorized.text(), /Bureau de l’artiste/);

const openGraphImage = await request("/opengraph-image");
assert.equal(openGraphImage.status, 200, "L’image Open Graph doit répondre 200");
assert.match(openGraphImage.headers.get("content-type") ?? "", /^image\/png/);

const robots = await request("/robots.txt");
assert.equal(robots.status, 200, "robots.txt doit répondre 200");
assert.match(await robots.text(), new RegExp(`Sitemap: ${expectedSiteUrl}/sitemap\\.xml`));

const sitemap = await request("/sitemap.xml");
assert.equal(sitemap.status, 200, "Le sitemap doit répondre 200");
assert.match(await sitemap.text(), new RegExp(`<loc>${expectedSiteUrl}/<\\/loc>`));

console.log("Smoke test OK : public, sécurité, bureau, Open Graph, robots et sitemap.");
