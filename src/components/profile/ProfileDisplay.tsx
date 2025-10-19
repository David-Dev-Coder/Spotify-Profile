import Link from "next/link";
import { ProfileProps } from "@/types";
import TrackList from "../track/TrackList";
import ProfileHeader from "./ProfileHeader";
import ArtistList from "../artist/ArtistList";

export default function ProfileDisplay({ user, playlists, following }: ProfileProps) {
    return (
        <div className="flex flex-col py-16 max-w-6xl w-full">
            <ProfileHeader user={user} playlists={playlists} following={following} />

            <section className="mt-24">
                <div className="grid grid-cols-2 gap-14">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">Top Artists of All Time</h3>

                            <Link
                                href="/artists"
                                className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                                See more
                            </Link>
                        </div>

                        <div>
                            <ArtistList timeRange="long_term" limit={3} mini/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">Top Tracks of All Time</h3>

                            <Link
                                href="/tracks"
                                className="text-sm py-2 px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                                See more
                            </Link>
                        </div>

                        <div>
                            <TrackList timeRange="long_term" limit={3} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
