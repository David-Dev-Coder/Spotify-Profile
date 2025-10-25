import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getTrack } from "@/app/api/data";
import { convertedMusicTime } from "@/util";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Track({ params }: { params: { id: string } }) {
    const session = await getServerSession(nextAuthOptions);
    const data = await getTrack(session, params.id);

    return (
        <div className="default-container flex-col self-center">
            <div className="w-full grid grid-cols-[2fr_7fr] space-x-8">
                <div className="relative w-full aspect-square">
                    <Image src={data.album.images[0].url} alt={data.name} layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold">{data.name}</h1>
                    <p className="text-2xl text-gray-300 font-semibold">{data.artists.map((artist: any) => artist.name).join(", ")}</p>
                    <p className="text-sm text-white/50">{data.album.name} &#8226; {data.album.release_date.split("-")[0]}</p>

                    <div className="text-white/50 text-sm flex items-center gap-2 w-fit">
                        <span>Duration</span>
                        <span>{convertedMusicTime(data.duration_ms)}</span>
                    </div>

                    <a className="w-fit mt-4 grid place-items-center border-transparent rounded-full bg-green-500 py-2 px-6 text-xs uppercase font-semibold tracking-[0.125em] overflow-hidden cursor-pointer relative hover:bg-green-600" href={data.external_urls.spotify} target="_blank">
                        Play on Spotify
                    </a>
                </div>
            </div>
        </div>
    )
}