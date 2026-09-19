import { NextRequest, NextResponse } from "next/server";
import { siteUrl } from "./lib/site-config";

const AUTH_REALM = "Bureau-de-l-artiste";
const PASSWORD_PLACEHOLDER = "CHANGE_ME_USE_A_LONG_RANDOM_SECRET";
const MIN_PASSWORD_LENGTH = 16;

function privateHeaders(cacheControl: string) {
  return {
    "Cache-Control": cacheControl,
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    Vary: "Authorization",
  };
}

function unauthorizedResponse() {
  return new NextResponse("Authentification requise.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${AUTH_REALM}", charset="UTF-8"`,
      ...privateHeaders("no-store"),
    },
  });
}

export function proxy(request: NextRequest) {
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const requestProtocol = forwardedProtocol ?? request.nextUrl.protocol.replace(":", "");

  if (
    process.env.NODE_ENV === "production" &&
    siteUrl?.protocol === "https:" &&
    requestProtocol !== "https"
  ) {
    const secureUrl = request.nextUrl.clone();
    secureUrl.protocol = "https:";
    return NextResponse.redirect(secureUrl, 308);
  }

  const isBureauRequest =
    request.nextUrl.pathname === "/bureau" || request.nextUrl.pathname.startsWith("/bureau/");

  if (!isBureauRequest) {
    return NextResponse.next();
  }

  const expectedUsername = process.env.BUREAU_USERNAME?.trim();
  const expectedPassword = process.env.BUREAU_PASSWORD;

  if (
    !expectedUsername ||
    !expectedPassword ||
    expectedPassword.length < MIN_PASSWORD_LENGTH ||
    expectedPassword === PASSWORD_PLACEHOLDER
  ) {
    return new NextResponse("Le bureau n’est pas configuré.", {
      status: 503,
      headers: privateHeaders("no-store"),
    });
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  let credentials: string;

  try {
    credentials = atob(authorization.slice("Basic ".length));
  } catch {
    return unauthorizedResponse();
  }

  const separatorIndex = credentials.indexOf(":");

  if (separatorIndex === -1) {
    return unauthorizedResponse();
  }

  const username = credentials.slice(0, separatorIndex);
  const password = credentials.slice(separatorIndex + 1);

  if (username !== expectedUsername || password !== expectedPassword) {
    return unauthorizedResponse();
  }

  const response = NextResponse.next();
  for (const [key, value] of Object.entries(privateHeaders("private, no-store"))) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: ["/:path*"],
};
