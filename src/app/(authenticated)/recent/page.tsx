import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import TrackList from "@/components/recent/TrackList";

export default async function Recent() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <div className="default-container">
            <div className="flex flex-col flex-1 mt-2">
                <header className="flex text-center">
                    <h1 className="text-xl sm:text-2xl font-bold">Recently Played Tracks</h1>
                </header>

                <section className="flex mt-10 sm:mt-20 w-full">
                    <TrackList session={session} />
                </section>
            </div>
        </div>
    );
}
