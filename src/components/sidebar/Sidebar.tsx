import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    return (
        <aside className="w-24 bg-black flex flex-col justify-between shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <nav className="flex items-center justify-center h-24">
                <Image src="/logo.svg" width={50} height={50} alt="Logo" priority={false} />
            </nav>

            <ul className="flex flex-col">
                <SidebarItem/>
            </ul>

            <nav className="flex items-center justify-center h-24">
                <a href="https://github.com/David-Dev-Coder" target="_blank">
                    <Image src="/github.svg" width={40} height={40} alt="Logo" priority={false} />
                </a>
            </nav>
        </aside>
    );
}