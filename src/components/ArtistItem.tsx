import ItemImageContent from "./ItemImageContent";

export default function ArtistItem({ name, imageSrc, width = 50 } : { name: string, imageSrc: string, width: number }) {
    return (
        <>
            <ItemImageContent name={name} imageSrc={imageSrc} width={width} rounded={true}/>

            <p className="hover:underline underline-offset-2 text-base">{name}</p>
        </>
    );
}