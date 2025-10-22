"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const handleClick = () => {
        setLoading(true);
        signIn("spotify", { callbackUrl: "/" });
    };

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="font-bold text-3xl">Spotify Profile</h1>
                <button
                    disabled={loading}
                    onClick={() => handleClick()}
                    className={"grid place-items-center border-transparent rounded-full bg-green-500 py-4 px-8 text-base uppercase font-semibold tracking-[0.2em] overflow-hidden cursor-pointer relative" + (loading ? " pointer-events-none opacity-75" : " hover:bg-green-600")}>
                    <span className={`ml-2 absolute -translate-y-[20%] text-3xl transition-transform delay-300 duration-500 animate-pulse ${loading ? "-translate-y-[20%]" : "-translate-y-[200%]"}`}>...</span>
                    <span className={`transition-transform duration-500 ${loading ? "translate-y-[200%]" : "translate-y-0"}`}>Log in to Spotify</span>
                </button>
            </div>
        </main>
    );
}
