import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface Redirects {
  [key: string]: string;
}

const redirects: Redirects = {
  "/contact/": "/kontakt/",
  "/realization/": "/",
  "/kampanie-internetowe//": "/marketing/",
  "/marketing-internetowy/": "/marketing/",
  "/social-media/": "/marketing/",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const redirectTo = redirects[url.pathname];

  if (redirectTo) {
    url.pathname = redirectTo;
    return NextResponse.redirect(url);
  }
}
