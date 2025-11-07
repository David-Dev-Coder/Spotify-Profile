import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname === "/login") {
        try {
            const token = await getToken({ req, secret: process.env.AUTH_SPOTIFY_SECRET });
            const expired = token?.accessTokenExpires ? token.accessTokenExpires * 1000 < Date.now() : true;

            if (token && !expired) {
                const url = req.nextUrl.clone();
                url.pathname = "/";
                return NextResponse.redirect(url);
            }
        } catch (e) {
            console.error("middleware getToken error:", e);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login"],
};
