'use client'

import Loader from "@/components/Loader";
import TrackItem from "@/components/TrackItem";
import { useSidebar } from "@/hooks/useSidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { RecentItem } from "@/types"; // Importe os tipos

export default function Recent() {

    const { data: session } = useSession();
    const [recentData, setRecentData] = useState<RecentItem[] | null>(null);
    const { updateItemIndex } = useSidebar();
    
    useEffect(() => {    
        updateItemIndex("recent");
    }, []);

    useEffect(() => {
        async function f() {
            if (session && session.accessToken) {
                const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`
                    }
                });
                const data = await response.json();
                setRecentData(data.items);
            }
        }
        f();
    }, [session]);

    return (
        <div className="flex py-16 max-w-6xl w-full">
            <div className="flex flex-col flex-1 mt-2">
                <header className="flex">
                    <h1 className="text-2xl font-bold">Recently Played Tracks</h1>
                </header>

                <section className="flex py-20 w-full">
                    <ul className="flex flex-col gap-5 w-full">
                        {recentData ? (
                        recentData.map(({ track }, i) => (
                            track && track.album && track.album.images[2] ? (
                                <TrackItem
                                    musicName={track.name}
                                    artistName={track.artists[0].name}
                                    albumName={track.album.name}
                                    musicTime={new Date(track.duration_ms).toISOString().substr(14, 5)}
                                    imageSrc={track.album.images[2].url}
                                    width={50}
                                    key={i}
                                />
                            ) : null
                        ))) : (
                            <Loader />
                        )}
                    </ul>
                </section>
            </div>
        </div>
    );
}
