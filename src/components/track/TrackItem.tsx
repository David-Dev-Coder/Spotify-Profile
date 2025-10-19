import ItemImageContent from "../ItemImageContent";

export default function TrackItem({ musicName, artistName, albumName, duration, imageSrc, width = 50 } : { musicName: string, artistName: string, albumName: string, duration: string, imageSrc: string, width: number }) {
    // ms to min:sec
    const convertedMusicTime = (_duration: string) => {
        const numDuration = Number(_duration);
        const min = Math.floor(numDuration / 60000);
        const sec = Math.floor((numDuration % 60000) / 1000);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }

    return (
        <li className="flex gap-5 items-center group cursor-pointer">
            <ItemImageContent name={albumName} imageSrc={imageSrc} width={width} rounded={false}/>

            <div className="flex flex-1 justify-between">
                <div className="flex flex-col">
                    <p className="hover:underline underline-offset-2 text-base">{musicName}</p>
                    <span className="text-[.85rem] text-zinc-400">{`${artistName}   ·   ${albumName}`}</span>
                </div>

                <span className="text-[.85rem] text-zinc-400">{convertedMusicTime(duration)}</span>
            </div>
        </li>
    );
}