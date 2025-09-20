"use client";

import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarProvider from "@/hooks/useSidebar";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session) {
            const timeout = setTimeout(() => {
                setLoading(false);
                router.push("/login");
            }, 5000);

            return () => clearTimeout(timeout);
        }

        setLoading(false);
    }, [session, router]);

    return (
        <SidebarProvider>
            {loading ? (
                <Loader />
            ) : session ? (
                <div className="h-screen flex flex-col">
                    <div className="flex flex-1 overflow-hidden">
                        <Sidebar />

                        <main className="flex flex-1 justify-center overflow-y-auto">
                            {children}
                        </main>
                    </div>
                </div>
            ) : null}
        </SidebarProvider>
    );
}
