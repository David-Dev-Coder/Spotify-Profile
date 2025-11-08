import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getArtistDetails } from "@/app/api/data";
import { getServerSession } from "next-auth";
import Image from "next/image";

interface PageProps {
    searchParams: {
        id?: string;
    };
}

export default async function ArtistsView({ searchParams }: PageProps) {
    const ArtistId = searchParams.id;
    const session = await getServerSession(nextAuthOptions);
    const artistDetails = await getArtistDetails(session, ArtistId as string);

    return (
        <div className="w-full py-8 px-2 h-full grid place-items-center relative">
            <div className="flex flex-col flex-1">
                {artistDetails ? (
                    <div className="w-full flex flex-col items-center justify-center">
                        <Image 
                            src={artistDetails.images[0].url} 
                            alt={artistDetails.name} 
                            width={300} 
                            height={300} 
                            className="rounded-full sm:mb-4 max-w-[90vw]"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg=="
                        />
                        <h2 className="text-4xl sm:text-6xl font-semibold my-4">{artistDetails.name}</h2>
                        <div className="flex flex-row gap-2 justify-center flex-wrap">
                            {artistDetails.followers && <div className="flex flex-col items-center mx-4">
                                <span className="text-green-500 text-xl sm:text-2xl">{artistDetails.followers.total.toLocaleString()}</span>
                                <span className="font-bold text-base sm:text-lg">Followers</span>
                            </div>}
                            {(artistDetails.genres && artistDetails.genres.length > 0) && <div className="flex flex-col items-center mx-4 max-w-xs text-center">
                                <span className="text-green-500 text-xl sm:text-2xl uppercase">{artistDetails.genres.join(", ")}</span>
                                <span className="font-bold text-base sm:text-lg">Genres</span>
                            </div>}
                            {artistDetails.popularity && <div className="flex flex-col items-center mx-4">
                                <span className="text-green-500 text-xl sm:text-2xl">{artistDetails.popularity}%</span>
                                <span className="font-bold text-base sm:text-lg">Popularity</span>
                            </div>}
                        </div>
                    </div>
                ) : (
                    <p>Artist not found</p>
                )}
            </div>
        </div>
    )
}