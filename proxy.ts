import { NextRequest, NextResponse } from "next/server";

const AUTH_REALM = "Bureau-de-l-artiste";

function unauthorizedResponse() {
  return new NextResponse("Authentification requise.", {
    status: 401,
    headers: {
      "Cache-Control": "no-store",
      "WWW-Authenticate": `Basic realm="${AUTH_REALM}", charset="UTF-8"`,
    },
  });
}

export function proxy(request: NextRequest) {
  const expectedUsername = process.env.BUREAU_USERNAME;
  const expectedPassword = process.env.BUREAU_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return new NextResponse("Le bureau n’est pas configuré.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
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
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

export const config = {
  matcher: ["/bureau/:path*"],
};
