import { auth } from "@/lib/auth";

const authUrls = ["/signin", "/signup"];

export default auth((req) => {
  if (!req.auth && !authUrls.includes(req.nextUrl.pathname)) {
    const newUrl = new URL("/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon.png).*)"],
};
