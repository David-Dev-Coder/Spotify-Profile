import Link from "next/link";
import ItemImageContent from "../ItemImageContent";
import { convertedMusicTime } from "@/util";

export default function TrackItem({ id, musicName, artistName, albumName, duration, imageSrc, width = 50 } : { id: string, musicName: string, artistName: string, albumName: string, duration: string, imageSrc: string, width: number }) {
    return (
        <Link className="flex gap-5 items-center group cursor-pointer" href={`/tracks/${encodeURIComponent(id)}`}>
            <ItemImageContent name={albumName} imageSrc={imageSrc} width={width} rounded={false}/>

            <div className="flex flex-1 justify-between">
                <div className="flex flex-col">
                    <p className="hover:underline underline-offset-2 text-base">{musicName}</p>
                    <span className="text-[.85rem] text-zinc-400">{`${artistName}   ·   ${albumName}`}</span>
                </div>

                <span className="text-[.85rem] text-zinc-400">{convertedMusicTime(duration)}</span>
            </div>
        </Link>
    );
}