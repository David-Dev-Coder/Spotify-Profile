export default function Loader() {
    return (
        <div className="flex justify-center items-center w-full h-[90vh]">
            <div className="flex justify-center items-end overflow-hidden w-full min-w-[100px] h-[50px] my-0 mx-auto z-[2] relative left-0 right-0">
                <div className="w-[10px] h-[5px] my-0 mx-[2px] bg-zinc-600 danceAnim" style={{animationDelay: "250ms"}}></div>
                <div className="w-[10px] h-[5px] my-0 mx-[2px] bg-zinc-600 danceAnim" style={{animationDelay: "715ms"}}></div>
                <div className="w-[10px] h-[5px] my-0 mx-[2px] bg-zinc-600 danceAnim" style={{animationDelay: "475ms"}}></div>
                <div className="w-[10px] h-[5px] my-0 mx-[2px] bg-zinc-600 danceAnim" style={{animationDelay: "25ms"}}></div>
                <div className="w-[10px] h-[5px] my-0 mx-[2px] bg-zinc-600 danceAnim" style={{animationDelay: "190ms"}}></div>
            </div>
        </div>
    );
}