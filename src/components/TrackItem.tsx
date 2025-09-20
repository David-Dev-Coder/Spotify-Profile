import ItemImageContent from "./ItemImageContent";

export default function TrackItem({ musicName, artistName, albumName, musicTime, imageSrc, width = 50 } : { musicName: string, artistName: string, albumName: string, musicTime: string, imageSrc: string, width: number }) {
    return (
        <li className="flex gap-5 items-center group cursor-pointer">
            <ItemImageContent name={albumName} imageSrc={imageSrc} width={width} rounded={false}/>

            <div className="flex flex-1 justify-between">
                <div className="flex flex-col">
                    <p className="hover:underline underline-offset-2 text-base">{musicName}</p>
                    <span className="text-[.85rem] text-zinc-400">{`${artistName}   ·   ${albumName}`}</span>
                </div>

                <span className="text-[.85rem] text-zinc-400">{musicTime}</span>
            </div>
        </li>
    );
}