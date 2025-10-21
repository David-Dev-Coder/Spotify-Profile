import TrackItem from "@/components/track/TrackItem";
import { Suspense } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";
import TrackList from "@/components/track/TrackList";

type TimeRange = "long_term" | "medium_term" | "short_term";

interface PageProps {
    searchParams: {
        range?: TimeRange;
    };
}

export default async function TopTracks({ searchParams }: PageProps) {
    const timeRange = searchParams.range || "long_term";
    return (
        <div className="default-container">
            <div className="flex flex-col flex-1 mt-2">
                <nav className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Top Tracks</h1>
                    <div className="flex gap-4">
                        <Link href="/tracks?range=long_term" className={`hover:text-zinc-50 transition duration-300 ${timeRange === "long_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                            All Time
                        </Link>
                        <Link href="/tracks?range=medium_term" className={`hover:text-zinc-50 transition duration-300 ${timeRange === "medium_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                            Last 6 Months
                        </Link>
                        <Link href="/tracks?range=short_term" className={`hover:text-zinc-50 transition duration-300 ${timeRange === "short_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                            Last 4 Weeks
                        </Link>
                    </div>
                </nav>

                <section className="flex mt-20 w-full">
                    <Suspense fallback={<Loader />}>
                        <TrackList key={timeRange} timeRange={timeRange} />
                    </Suspense>
                </section>
            </div>
        </div>
    )
}