import { NextResponse, type NextRequest } from "next/server";

const canonicalHost = "mspartnersus.com";

export function proxy(request: NextRequest) {
  const { hostname, pathname, search } = request.nextUrl;
  const forwardedHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? hostname;

  if (hostname.endsWith(".vercel.app") || forwardedHost.endsWith(".vercel.app")) {
    return NextResponse.redirect(`https://${canonicalHost}${pathname}${search}`, 308);
  }

  return NextResponse.next();
}
