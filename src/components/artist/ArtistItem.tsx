import ItemImageContent from "../ItemImageContent";

export default function ArtistItem({ name, imageSrc, width = 50, row = false } : { name: string, imageSrc: string, width: number, row?: boolean }) {
    return (
        <div className={`flex gap-5 items-center group cursor-pointer ${row ? "flex-row" : "flex-col"}`}>
            <ItemImageContent name={name} imageSrc={imageSrc} width={width} rounded={true}/>

            <p className="hover:underline underline-offset-2 text-base">{name}</p>
        </div>
    );
}