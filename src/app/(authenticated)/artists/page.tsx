import { Suspense } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";
import ArtistList from "@/components/artist/ArtistList";

type TimeRange = "long_term" | "medium_term" | "short_term";

interface PageProps {
    searchParams: {
        range?: TimeRange;
    };
}

export default async function TopArtists({ searchParams }: PageProps) {
    const timeRange = searchParams.range || "long_term";

    return (
        <div className="flex max-w-6xl w-full py-16">
            <div className="flex flex-col flex-1 mt-2">
                <nav className="flex justify-between">
                    <h1 className="text-2xl font-bold">Top Artists</h1>
                    <div className="flex gap-4">
                        <Link href="/artists?range=long_term" className={`hover:text-zinc-50 transition duration-300 ${timeRange === "long_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                            All Time
                        </Link>
                        <Link href="/artists?range=medium_term" className={`hover:text-zinc-50 transition duration-300 ${timeRange === "medium_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                            Last 6 Months
                        </Link>
                        <Link href="/artists?range=short_term" className={`hover:text-zinc-50 transition duration-300 ${timeRange === "short_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                            Last 4 Weeks
                        </Link>
                    </div>
                </nav>

                <section className="flex mt-20">
                    <Suspense fallback={<Loader />}>
                        <ArtistList key={timeRange} timeRange={timeRange} />
                    </Suspense>
                </section>
            </div>
        </div>
    );
}