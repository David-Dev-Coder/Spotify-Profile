"use client";

import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { SidebarItemType } from "@/types";
import { usePathname } from "next/navigation";
import { ImGithub } from "react-icons/im";

export default function Sidebar() {
    const pathname = usePathname();

    const items: SidebarItemType[] = [
        { route: "/", icon: "profile", text: "Profile", id: 0, name: "profile" },
        { route: "/artists", icon: "microphone", text: "Top Artists", id: 1, name: "top-artists" },
        { route: "/tracks", icon: "music", text: "Top Tracks", id: 2, name: "top-tracks" },
        { route: "/recent", icon: "time", text: "Recent", id: 3, name: "recent" },
        { route: "/playlists", icon: "playlist", text: "Playlists", id: 4, name: "playlists" },
    ];

    const activeId = items.find((item) => item.route === "/" ? pathname === "/" : pathname.startsWith(item.route))?.id ?? -1;

    return (
        <aside className="w-24 bg-black flex flex-col justify-between shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <nav className="flex items-center justify-center h-24">
                <Image src="/logo.svg" width={50} height={50} alt="Logo" priority />
            </nav>

            <ul className="flex flex-col">
                {items.map((item) => (
                    <SidebarItem key={item.id} item={item} active={activeId === item.id} />
                ))}
            </ul>

            <nav className="flex items-center justify-center h-24">
                <a className="hover:text-green-500" href="https://github.com/David-Dev-Coder" target="_blank">
                    <ImGithub className="w-10 h-10" />
                </a>
            </nav>
        </aside>
    );
}
