import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getTopArtists } from "@/app/api/data";
import { getServerSession } from "next-auth";
import ArtistItem from "../ArtistItem";

type TimeRange = "long_term" | "medium_term" | "short_term";

export default async function ArtistList({ timeRange }: { timeRange: TimeRange }) {
    const session = await getServerSession(nextAuthOptions);
    const data = await getTopArtists(session, timeRange);
    return (
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-5">
            {data.map((artist: any) => (
                <ArtistItem key={artist.id} name={artist.name} imageSrc={artist.images[0]?.url} width={200} />
            ))}
        </div>
    );
}