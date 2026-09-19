const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function parseSiteUrl(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  // Une URL invalide doit faire échouer le build plutôt que produire des liens SEO corrompus.
  const parsedUrl = new URL(value);

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error("NEXT_PUBLIC_SITE_URL doit utiliser http:// ou https://.");
  }

  if (parsedUrl.username || parsedUrl.password || parsedUrl.search || parsedUrl.hash) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL ne doit contenir ni identifiants, ni requête, ni fragment.",
    );
  }

  return parsedUrl;
}

export const siteUrl = parseSiteUrl(configuredSiteUrl);
