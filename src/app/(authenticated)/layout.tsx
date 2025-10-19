import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import NextAuthSessionProvider from "@/providers/sessionProvider";

export default async function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(nextAuthOptions);

    if (!session || !session.accessToken) {
        redirect("/login");
    }

    return (
        <NextAuthSessionProvider session={session}>
            <div className="h-screen flex flex-col">
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />

                    <main className="flex flex-1 justify-center items-start overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </NextAuthSessionProvider>
    );
}