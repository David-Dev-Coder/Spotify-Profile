"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
    const handleClick = () => {
        signIn("spotify", { callbackUrl: "/" });
    };

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="font-bold text-3xl">Spotify Profile</h1>
                <a
                    onClick={() => handleClick()}
                    className="border-transparent rounded-full bg-green-500 py-4 px-8 text-base uppercase font-semibold tracking-[0.2em] cursor-pointer">
                    Log in to Spotify
                </a>
            </div>
        </main>
    );
}
