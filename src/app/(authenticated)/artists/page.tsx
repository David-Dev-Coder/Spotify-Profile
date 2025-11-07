import { Suspense } from "react";
import Loader from "@/components/global/Loader";
import ArtistList from "@/components/artist/ArtistList";
import FilterNav from "@/components/global/FilterNav";

type TimeRange = "long_term" | "medium_term" | "short_term";

interface PageProps {
    searchParams: {
        range?: TimeRange;
    };
}

export default async function TopArtists({ searchParams }: PageProps) {
    const timeRange = searchParams.range || "long_term";

    return (
        <div className="default-container">
            <div className="flex flex-col flex-1 mt-2">
                <FilterNav timeRange={timeRange} title="Top Artists" url="/artists" />

                <section className="flex mt-10 sm:mt-20">
                    <Suspense fallback={<Loader />}>
                        <ArtistList key={timeRange} timeRange={timeRange} />
                    </Suspense>
                </section>
            </div>
        </div>
    );
}