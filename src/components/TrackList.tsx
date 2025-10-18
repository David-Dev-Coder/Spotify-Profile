import { getRecentlyPlayedTracks } from "@/app/api/data";
import TrackItem from "./TrackItem";

export default async function TrackList(session: any) {
    const posts = await getRecentlyPlayedTracks(session.session);

    return (
        <ul className="flex flex-col gap-5 w-full">
            {(posts?.map(({ track } : { track: any }, i : number) => (
                track && track.album && track.album.images[2] ? (
                    <TrackItem
                        musicName={track.name}
                        artistName={track.artists[0].name}
                        albumName={track.album.name}
                        musicTime={new Date(track.duration_ms).toISOString().substr(14, 5)}
                        imageSrc={track.album.images[2].url}
                        width={50}
                        key={i}
                    />
                ) : null
            )))}
        </ul>
    );
}