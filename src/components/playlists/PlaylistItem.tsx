import Image from "next/image";
import Link from "next/link";

export default function PlaylistItem({ name, id, tracks, img = "https://dummyjson.com/image/150"  }: { name: string; id: string; tracks: { href: string, total: number }; img?: string }) {
    return (
        <div className="flex flex-col items-center">
            <Link href={`/playlists/${id}`}>
                <div className="relative mb-4 w-full max-w-md aspect-square hover:brightness-75 transition-all">
                    <Image src={img} fill alt={name} className="object-cover" />
                </div>
                <p className="max-w-md text-center text-xl font-bold underline-offset-2 hover:underline">
                    {name}
                </p>
                <p className="text-md text-zinc-400 uppercase text-center">{tracks?.total} tracks</p>
            </Link>
        </div>
    );
}