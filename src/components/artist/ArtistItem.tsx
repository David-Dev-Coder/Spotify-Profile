import Link from "next/link";
import ItemImageContent from "../ItemImageContent";

export default function ArtistItem({ name, id, imageSrc, width = 50, row = false } : { name: string, id: string, imageSrc: string, width: number, row?: boolean }) {
    return (
        <Link className={`flex gap-5 items-center group cursor-pointer ${row ? "flex-row" : "flex-col"}`} href={`/artists/view?id=${encodeURIComponent(id)}`}>
            <ItemImageContent name={name} imageSrc={imageSrc} width={width} rounded={true}/>

            <p className="hover:underline underline-offset-2 text-base">{name}</p>
        </Link>
    );
}