import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getTopTracks } from "@/app/api/data";
import { getServerSession } from "next-auth";
import TrackItem from "./TrackItem";

type TimeRange = "long_term" | "medium_term" | "short_term";

export default async function TrackList({ timeRange, limit = 50 }: { timeRange: TimeRange, limit?: number }) {
    const session = await getServerSession(nextAuthOptions);
    const data = await getTopTracks(session, timeRange, limit);

    return (
        <div className="w-full flex flex-col gap-5">
            {data.map((track: any) => (
                <TrackItem key={track.id} musicName={track.name} artistName={track.artists[0].name} albumName={track.album.name} duration={track.duration_ms} imageSrc={track.album.images[0]?.url} width={50} />
            ))}
        </div>
    );
}