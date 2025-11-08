'use client';

import { signOut } from "next-auth/react";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { ProfileProps } from "@/types";

export default function ProfileHeader({ user, playlists, following }: ProfileProps) {
    return (
        <header className="flex flex-col items-center w-full gap-2 xs:gap-4 sm:gap-8">
            <div className="border-zinc-50 border-2 rounded-full p-4 md:p-8">
                <div className="w-20 h-20">
                    {user.images?.[0]?.url ? (
                        <Image src={user.images[0].url} width={80} height={80} alt="Logo" priority={false} />
                    ) : (
                        <BsFillPersonFill className="w-20 h-20 text-white" />
                    )}
                </div>
            </div>

            <h2 className="text-2xl xs:text-5xl font-semibold">{user?.display_name}</h2>

            <div className="flex items-center gap-4 sm:gap-8">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center text-green-500 font-medium text-base sm:text-lg">{user.followers?.total}</div>
                    <p className="text-sm xs:text-base">Followers</p>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="flex justify-center text-green-500 font-medium text-base sm:text-lg">{following?.length}</div>
                    <p className="text-sm xs:text-base">Following</p>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="flex justify-center text-green-500 font-medium text-base sm:text-lg">{playlists?.length}</div>
                    <p className="text-sm xs:text-base">Playlists</p>
                </div>
            </div>

            <button
                onClick={() => signOut()}
                className="text-xs xs:text-sm py-2 px-4 sm:px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                Logout
            </button>
        </header>
    );
}