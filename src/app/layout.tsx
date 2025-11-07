import SessionProvider from "@/providers/sessionProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    title: "Spotify Profile",
    description: "Spotify Profile",
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider session={null}>
            <html lang="pt-br">
                <body className="bg-zinc-900 text-zinc-50 font-body">
                    {children}
                    <Analytics />
                </body>
            </html>
        </SessionProvider>
    );
}
