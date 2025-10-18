import TrackItem from "@/components/TrackItem";

export default function TopTracks() {
    return (
        <div className="flex py-16 max-w-6xl w-full">
            <div className="flex flex-col flex-1 mt-2">
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">Top Tracks</h1>
                    <div className="flex gap-4">
                        <a href="" className="hover:text-zinc-50 text-zinc-50 transition duration-300 underline underline-offset-4">All Time</a>
                        <a href="" className="hover:text-zinc-50 text-zinc-400 transition duration-300">Last 6 Months</a>
                        <a href="" className="hover:text-zinc-50 text-zinc-400 transition duration-300">Last 4 Weeks</a>
                    </div>
                </header>

                <section className="flex mt-20 w-full">
                    <ul className="flex flex-col gap-5 w-full">
                        <TrackItem musicName={"Believer"} artistName={"Imagine Dragons"} albumName={"Evolve"} musicTime={"3:24"} imageSrc={"/test/ab67616d000048515675e83f707f1d7271e5cf8a.jpg"} width={50}/>
                        <TrackItem musicName={"Always"} artistName={"Gavin James"} albumName={"Only Ticket Home"} musicTime={"4:08"} imageSrc={"/test/ab67616d00004851e0fdd98b0724f1d744b3845a.jpg"} width={50}/>
                        <TrackItem musicName={"Thunder"} artistName={"Imagine Dragons"} albumName={"Evolve"} musicTime={"3:08"} imageSrc={"/test/ab67616d000048515675e83f707f1d7271e5cf8a.jpg"} width={50}/>
                    </ul>
                </section>
            </div>
        </div>
    )
}