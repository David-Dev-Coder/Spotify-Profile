"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ArtistItem from "../ArtistItem";
import TrackItem from "../TrackItem";
import { ProfileProps } from "@/types";
import { BsFillPersonFill } from "react-icons/bs";

export default function ProfileDisplay({ user, playlists, following }: ProfileProps) {
    return (
        <div className="flex flex-col py-16 max-w-6xl w-full">
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

            <section className="mt-24">
                <div className="grid grid-cols-2 gap-14">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">Top Artists of All Time</h3>

                            <Link
                                href="/artists"
                                className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                                See more
                            </Link>
                        </div>

                        <div>
                            <ul className="flex flex-col gap-5">
                                <ArtistItem name={"Imagine Dragons"} imageSrc="/test/ab67616100005174920dc1f617550de8388f368e.jpg" width={50} row/>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">Top Tracks of All Time</h3>

                            <Link
                                href="/tracks"
                                className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                                See more
                            </Link>
                        </div>

                        <div>
                            <ul className="flex flex-col gap-5">
                                <TrackItem
                                    musicName={"Believer"}
                                    artistName={"Imagine Dragons"}
                                    albumName={"Evolve"}
                                    musicTime={"3:24"}
                                    imageSrc={"/test/ab67616d000048515675e83f707f1d7271e5cf8a.jpg"}
                                    width={50}
                                />
                                <TrackItem
                                    musicName={"Always"}
                                    artistName={"Gavin James"}
                                    albumName={"Only Ticket Home"}
                                    musicTime={"4:08"}
                                    imageSrc={"/test/ab67616d00004851e0fdd98b0724f1d744b3845a.jpg"}
                                    width={50}
                                />
                                <TrackItem
                                    musicName={"Thunder"}
                                    artistName={"Imagine Dragons"}
                                    albumName={"Evolve"}
                                    musicTime={"3:08"}
                                    imageSrc={"/test/ab67616d000048515675e83f707f1d7271e5cf8a.jpg"}
                                    width={50}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
