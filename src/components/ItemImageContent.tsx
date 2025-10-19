import Image from "next/image";
import { IoIosInformationCircle } from "react-icons/io";

export default function ItemImageContent({ name, imageSrc, width = 50, rounded } : { name: string, imageSrc: string, width: number, rounded: boolean }) {
    return (
        <div className={`overflow-hidden relative ${rounded ? "rounded-full border-[1px] border-transparent" : ""}`}>
            <div className="absolute inset-0 flex justify-center items-center bg-zinc-950/50 opacity-0 group-hover:opacity-100 transition duration-300">
                <IoIosInformationCircle className="w-7 h-7 text-zinc-200" />
            </div>
            <Image src={imageSrc} width={width} height={width} alt={name} priority={false} style={{ height: `${width}px`, width: `${width}px`}} className="object-cover" />
        </div>
    );
}