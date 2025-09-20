'use client'
import ArtistItem from "@/components/ArtistItem";
import Loader from "@/components/Loader";
import TrackItem from "@/components/TrackItem";
import { useSidebar } from "@/hooks/useSidebar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const { data: session } = useSession();
    const { updateItemIndex } = useSidebar();
    const [userData, setUserData] = useState<any>(null)
    const [playlists, setPlaylists] = useState<any>([])
    const [following, setFollowing] = useState<any>(null)

    useEffect(() => {    
        updateItemIndex("profile");
    }, []);

    useEffect(() => {
        async function f() {
            if (session && session.accessToken) {
                setUserData(await getUserData())
            }
        }
        f()
    }, [session])

    useEffect(() => {
        async function f() {
            if (session && session.accessToken) {
                const response = await fetch("https://api.spotify.com/v1/me/playlists", {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`
                    }
                })
                const data = await response.json()
                setPlaylists(data.items)
            }
        }
        f()

        async function g() {
            if (session && session.accessToken) {
                const response = await fetch("https://api.spotify.com/v1/me/following?type=artist", {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`
                    }
                })
                const data = await response.json()
                setFollowing(data)
            }
        }
        g()
    }, [session])

    async function getUserData(): Promise<any> {
        const response = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`
            }
        })
        const data = await response.json()
        return data
    }

    return (
            session
            
            ?

            <div className="flex flex-col py-16 max-w-6xl w-full">
                <header className="flex flex-col items-center w-full gap-8">
                    <div className="border-zinc-50 border-2 rounded-full p-8">
                        <Image src="/profile.svg" width={80} height={80} alt="Logo" priority={false} />    
                    </div>

                    <h2 className="text-5xl font-semibold">{userData ? userData?.display_name : "Loading..."}</h2>

                    <div className="flex items-center gap-8">
                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center text-green-500 font-medium text-lg">{userData ? userData?.followers.total : 0}</div>
                            <p>Followers</p>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center text-green-500 font-medium text-lg">{following ? following?.artists.items.length : 0}</div>
                            <p>Following</p>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex justify-center text-green-500 font-medium text-lg">{playlists ? playlists.length : 0}</div>
                            <p>Playlists</p>
                        </div>
                    </div>

                    <a href="#" className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">Logout</a>
                </header>

                <section className="mt-24">
                    <div className="grid grid-cols-2 gap-14">
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">Top Artists of All Time</h3>

                                <div onClick={() => updateItemIndex(1)}>
                                    <Link href="/artists" className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">See more</Link>
                                </div>
                            </div>

                            <div>
                                <ul className="flex flex-col gap-5">
                                    <li className="flex gap-5 items-center group cursor-pointer">
                                        <ArtistItem name={"Imagine Dragons"} imageSrc={"/test/ab6761610000f178920dc1f617550de8388f368e.jpg"} width={50}/>
                                    </li>
                                    <li className="flex gap-5 items-center group cursor-pointer">
                                        <ArtistItem name={"Sia"} imageSrc={"/test/ab6761610000f178ec40474426f4401a4203dc9f.jpg"} width={50}/>
                                    </li>
                                    <li className="flex gap-5 items-center group cursor-pointer">
                                        <ArtistItem name={"ILLENIUM"} imageSrc={"/test/ab6761610000f17881a0ab3a9a4326929a01b0f1.jpg"} width={50}/>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">Top Tracks of All Time</h3>

                                <div onClick={() => updateItemIndex(2)}>
                                    <Link href="/tracks" className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">See more</Link>
                                </div>
                            </div>

                            <div>
                                <ul className="flex flex-col gap-5">
                                    <TrackItem musicName={"Believer"} artistName={"Imagine Dragons"} albumName={"Evolve"} musicTime={"3:24"} imageSrc={"/test/ab67616d000048515675e83f707f1d7271e5cf8a.jpg"} width={50}/>
                                    <TrackItem musicName={"Always"} artistName={"Gavin James"} albumName={"Only Ticket Home"} musicTime={"4:08"} imageSrc={"/test/ab67616d00004851e0fdd98b0724f1d744b3845a.jpg"} width={50}/>
                                    <TrackItem musicName={"Thunder"} artistName={"Imagine Dragons"} albumName={"Evolve"} musicTime={"3:08"} imageSrc={"/test/ab67616d000048515675e83f707f1d7271e5cf8a.jpg"} width={50}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            :

            <Loader/>
    );
}
