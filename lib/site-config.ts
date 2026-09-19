const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// Une URL invalide doit faire échouer le build plutôt que produire des liens SEO corrompus.
export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;
