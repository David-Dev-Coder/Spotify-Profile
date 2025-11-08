import Link from "next/link";
import ItemImageContent from "../global/ItemImageContent";
import { convertedMusicTime } from "@/util";

export default function TrackItem({ id, musicName, artistName, albumName, duration, imageSrc, width = 50 } : { id: string, musicName: string, artistName: string, albumName: string, duration: string, imageSrc: string, width: number }) {
    return (
        <Link className="flex gap-2 sm:gap-5 items-center group cursor-pointer" href={`/tracks/${encodeURIComponent(id)}`}>
            <ItemImageContent name={albumName} imageSrc={imageSrc} width={width} rounded={false}/>

            <div className="flex-1 grid grid-cols-[1fr,auto] gap-2">
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                    <p className="hover:underline underline-offset-2 text-base overflow-hidden whitespace-nowrap text-ellipsis">{musicName}</p>
                    <p className="text-[.85rem] text-zinc-400 overflow-hidden whitespace-nowrap text-ellipsis">{`${artistName}   ·   ${albumName}`}</p>
                </div>

                <span className="text-[.85rem] text-zinc-400">{convertedMusicTime(duration)}</span>
            </div>
        </Link>
    );
}