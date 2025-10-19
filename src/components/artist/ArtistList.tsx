import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getTopArtists } from "@/app/api/data";
import { getServerSession } from "next-auth";
import ArtistItem from "./ArtistItem";

type TimeRange = "long_term" | "medium_term" | "short_term";

export default async function ArtistList({ timeRange, limit = 50, mini = false }: { timeRange: TimeRange, limit?: number, mini?: boolean }) {
    const session = await getServerSession(nextAuthOptions);
    const data = await getTopArtists(session, timeRange, limit);
    return (
        <div className={`w-full gap-5 ${mini ? "flex flex-col" : "grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))]"}`}>
            {data.map((artist: any) => (
                <ArtistItem key={artist.id} name={artist.name} imageSrc={artist.images[0]?.url} width={mini ? 50 : 200} row={mini} />
            ))}
        </div>
    );
}