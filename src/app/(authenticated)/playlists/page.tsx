import PlaylistList from "@/components/playlists/PlaylistList";

export default function Playlists() {
  return (
    <div className="default-container">
        <div className="flex flex-col flex-1 mt-2">
            <header className="flex">
                <h1 className="text-2xl font-bold">Your Playlists</h1>
            </header>

            <section className="flex mt-20 w-full">
                <PlaylistList />
            </section>
        </div>
    </div>
  );
}
