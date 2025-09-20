'use client';

import { useSidebar } from "@/hooks/useSidebar";
import Image from "next/image";
import Link from "next/link";

export default function SidebarItem() {
    const { index, items, updateItemIndex } = useSidebar();

    return (
        <>
            {items.map((item) => (
                <li className={`border-l-4 transition duration-500 ${item.id === index ? "bg-zinc-900 border-green-500" : "border-transparent hover:bg-zinc-900 hover:border-green-500"}`} key={item.id} onClick={() => updateItemIndex(item.id)}>
                    <Link href={item.route} className="grid place-items-center py-4">
                        <div className="flex flex-col items-center gap-1 text-xs text-zinc-200">
                            <Image src={item.imageSrc} width={20} height={20} alt={item.text} priority={false} />    
                            {item.text}
                        </div>
                    </Link>
                </li>
            ))}
        </>
    );
}