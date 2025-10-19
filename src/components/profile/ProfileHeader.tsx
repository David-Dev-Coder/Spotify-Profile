'use client';

import { signOut } from "next-auth/react";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { ProfileProps } from "@/types";

export default function ProfileHeader({ user, playlists, following }: ProfileProps) {
    return (
        <header className="flex flex-col items-center w-full gap-8">
            <div className="border-zinc-50 border-2 rounded-full p-8">
                {user.images?.[0]?.url ? (
                    <Image src={user.images[0].url} width={80} height={80} alt="Logo" priority={false} />
                ) : (
                    <BsFillPersonFill className="w-20 h-20 text-white" />
                )}
            </div>

            <h2 className="text-5xl font-semibold">{user?.display_name}</h2>

            <div className="flex items-center gap-8">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center text-green-500 font-medium text-lg">{user.followers?.total}</div>
                    <p>Followers</p>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="flex justify-center text-green-500 font-medium text-lg">{following?.length}</div>
                    <p>Following</p>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="flex justify-center text-green-500 font-medium text-lg">{playlists?.length}</div>
                    <p>Playlists</p>
                </div>
            </div>

            <button
                onClick={() => signOut()}
                className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                Logout
            </button>
        </header>
    );
}