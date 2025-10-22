import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserPlaylists } from "@/app/api/data";
import { getServerSession } from "next-auth";
import PlaylistItem from "./PlaylistItem";

export default async function PlaylistList() {
    const session = await getServerSession(nextAuthOptions);
    const data = await getUserPlaylists(session);
    
    return (
        <div className={`w-full gap-5 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]`}>
            {data && data.length > 0 ? (
                data.map((playlist: any) => (
                    <PlaylistItem key={playlist.id} id={playlist.id} name={playlist.name} tracks={playlist.tracks} img={playlist.images[0]?.url} />
                ))
            ) : (
                <p>No playlists found.</p>
            )}
        </div>
    );
}