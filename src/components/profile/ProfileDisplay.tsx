import Link from "next/link";
import { ProfileProps } from "@/types";
import TrackList from "../track/TrackList";
import ProfileHeader from "./ProfileHeader";
import ArtistList from "../artist/ArtistList";

export default function ProfileDisplay({ user, playlists, following }: ProfileProps) {
    return (
        <div className="default-container flex-col">
            <ProfileHeader user={user} playlists={playlists} following={following} />

            <section className="mt-12 xs:mt-16 sm:mt-24">
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-14">
                    <div className="flex flex-col gap-4 sm:gap-8">
                        <div className="flex justify-between items-center gap-1">
                            <h3 className="text-base xs:text-lg font-semibold">Top Artists of All Time</h3>

                            <Link
                                href="/artists"
                                className="text-xs xs:text-sm py-2 px-4 sm:px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                                <span className="hidden xs:block">
                                    See more
                                </span>
                                <span className="block xs:hidden">
                                    More
                                </span>
                            </Link>
                        </div>

                        <div>
                            <ArtistList timeRange="long_term" limit={3} mini/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-8">
                        <div className="flex justify-between items-center gap-1">
                            <h3 className="text-base xs:text-lg font-semibold">Top Tracks of All Time</h3>

                            <Link
                                href="/tracks"
                                className="text-xs xs:text-sm py-2 px-4 sm:px-7 rounded-full border-[1px] border-zinc-50 uppercase font-medium hover:text-black hover:bg-zinc-50 transition duration-300">
                                <span className="hidden xs:block">
                                    See more
                                </span>
                                <span className="block xs:hidden">
                                    More
                                </span>
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
