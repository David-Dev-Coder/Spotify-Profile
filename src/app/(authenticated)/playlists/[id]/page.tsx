import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getPlaylist } from "@/app/api/data";
import TrackItem from "@/components/track/TrackItem";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Playlists({ params }: { params: { id: string } }) {
    const session = await getServerSession(nextAuthOptions);
    const data = await getPlaylist(session, params.id);

    return (
        <div className="default-container">
            <div className="w-full grid grid-cols-[2fr_5fr] gap-16">
                <div className="w-full flex flex-col items-center gap-2 sticky top-16 h-fit">
                    <div className="relative w-[90%] aspect-square mb-2">
                        <Image src={data.images[0]?.url || "https://dummyjson.com/image/150"} alt={`Playlist ${params.id}`} fill/>
                    </div>
                    <p className="max-w-md text-center text-xl font-bold">
                        {data.name}
                    </p>
                    <p className="text-sm text-zinc-400 uppercase text-center">{data.tracks?.total} tracks</p>
                </div>

                <div className="w-full flex flex-col gap-5">
                    {data.tracks?.items && data.tracks.items.map((item: any) => (
                        <TrackItem key={item.track.id} musicName={item.track.name} artistName={item.track.artists[0].name} albumName={item.track.album.name} duration={item.track.duration_ms} imageSrc={item.track.album.images[0]?.url} width={50} />
                    ))}
                </div>
            </div>
        </div>
    )
}