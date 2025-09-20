import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        accessTokenExpires?: number;
    }
}

const generateCodeVerifier = (length: number) => {
    let text = "";
    let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const verifier = generateCodeVerifier(128);

const params = new URLSearchParams();
params.append("response_type", "code");
// params.append("redirect_uri", "http://localhost:3000/");
params.append(
    "scope",
    "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public"
);
params.append("state", verifier);

const loginURL = `https://accounts.spotify.com/authorize?${params.toString()}`;

async function refreshAccessToken(token:any) {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", token.refreshToken);
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(process.env.AUTH_SPOTIFY_ID + ':' + process.env.AUTH_SPOTIFY_SECRET).toString('base64'))
        },
        body: params
    })
    const data = await response.json()

    return {
        accessToken: data.acess_token,
        refreshToken: data.refresh_token ?? token.refreshToken,
        accessTokenExpires: Date.now() + data.expires_in * 1000
    }
}

const nextAuthOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.AUTH_SPOTIFY_ID as string,
            clientSecret: process.env.AUTH_SPOTIFY_SECRET as string,
            authorization: loginURL,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.AUTH_SPOTIFY_SECRET as string,
    callbacks: {
        async jwt({ token, account }): Promise<JWT> {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.accessTokenExpires = account.expires_at
                return token;
            }
            if (token.accessTokenExpires && Date.now() < token.accessTokenExpires * 1000) {
                return token;
            }

            return refreshAccessToken(token)
        },
        async session({ session, token }) {
            if (session.user) {
                session.accessToken = token.accessToken as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
