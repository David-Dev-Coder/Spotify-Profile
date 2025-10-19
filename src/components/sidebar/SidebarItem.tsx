'use client';

import { SidebarItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { PiMusicNotesFill } from "react-icons/pi";
import { BiSolidPlaylist } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";

function Icon({ name, className }: { name: string, className?: string }) {
    switch (name) {
        case "profile":
            return <BsFillPersonFill className={className} />;
        case "microphone":
            return <PiMicrophoneStageFill className={className} />;
        case "music":
            return <PiMusicNotesFill className={className} />;
        case "time":
            return <PiClockCounterClockwiseFill className={className} />;
        case "playlist":
            return <BiSolidPlaylist className={className} />;
    }
}

export default function SidebarItem({ item, active }: { item: SidebarItemType, active: boolean }) {

    return (
        <li className={`border-l-4 transition duration-500 ${active ? "bg-zinc-900 border-green-500" : "border-transparent hover:bg-zinc-900 hover:border-green-500"}`} key={item.id}>
            <Link href={item.route} className="grid place-items-center py-4">
                <div className="flex flex-col items-center gap-1 text-xs text-zinc-200">
                    <Icon name={item.icon} className="w-6 h-6" />
                    {item.text}
                </div>
            </Link>
        </li>
    );
}