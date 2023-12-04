import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname === "/contact/") {
    url.pathname = "/kontakt/";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/realization/") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/kampanie-internetowe//") {
    url.pathname = "/marketing/";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/marketing-internetowy/") {
    url.pathname = "/marketing/";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/social-media/") {
    url.pathname = "/marketing/";
    return NextResponse.redirect(url);
  }
}
