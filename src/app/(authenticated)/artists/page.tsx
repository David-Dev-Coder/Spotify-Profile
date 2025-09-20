'use client'

import ArtistItem from "@/components/ArtistItem";
import { useSidebar } from "@/hooks/useSidebar";
import { useEffect } from "react";

export default function TopArtists() {
    const { updateItemIndex } = useSidebar();
    
    useEffect(() => {    
        updateItemIndex("top-artists");
    }, [])

    return (
        <div className="flex py-16 max-w-6xl w-full">
            <div className="flex flex-col flex-1 mt-2">
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">Top Artists</h1>
                    <div className="flex gap-4">
                        <a href="" className="hover:text-zinc-50 text-zinc-50 transition duration-300 underline underline-offset-4">All Time</a>
                        <a href="" className="hover:text-zinc-50 text-zinc-400 transition duration-300">Last 6 Months</a>
                        <a href="" className="hover:text-zinc-50 text-zinc-400 transition duration-300">Last 4 Weeks</a>
                    </div>
                </header>

                <section className="flex mt-20">
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-5">
                        <div className="flex flex-col gap-5 items-center group cursor-pointer">
                            <ArtistItem name={"Imagine Dragons"} imageSrc="/test/ab67616100005174920dc1f617550de8388f368e.jpg" width={200}/>
                        </div>
                        <div className="flex flex-col gap-5 items-center group cursor-pointer">
                            <ArtistItem name={"Sia"} imageSrc="/test/ab676161000051746d2a287155c3bfd7b85fa886.jpg" width={200}/>
                        </div>
                        <div className="flex flex-col gap-5 items-center group cursor-pointer">
                            <ArtistItem name={"ILLENIUM"} imageSrc="/test/ab6761610000517481a0ab3a9a4326929a01b0f1.jpg" width={200}/>
                        </div>
                        <div className="flex flex-col gap-5 items-center group cursor-pointer">
                            <ArtistItem name={"NEFFEX"} imageSrc="/test/ab6761610000517483a6dd3444d8a133e48486a0.jpg" width={200}/>
                        </div>
                        <div className="flex flex-col gap-5 items-center group cursor-pointer">
                            <ArtistItem name={"Alan Walker"} imageSrc="/test/ab67616100005174bf753c009fd9c2d53351dd3c.jpg" width={200}/>
                        </div>
                        <div className="flex flex-col gap-5 items-center group cursor-pointer">
                            <ArtistItem name={"AURORA"} imageSrc="/test/ab676161000051741cf32251011d049c26855ae4.jpg" width={200}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}