import Link from "next/link";

type TimeRange = "long_term" | "medium_term" | "short_term";

export default function FilterNav({ timeRange, title, url }: { timeRange: TimeRange, title: string, url: string }) {
    return (
        <nav className="flex justify-between items-center flex-wrap gap-2">
            <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
            <div className="flex gap-2 sm:gap-4">
                <Link href={`${url}?range=long_term`} className={`xs:text-sm sm:text-base hover:text-zinc-50 transition duration-300 ${timeRange === "long_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                    All Time
                </Link>
                <Link href={`${url}?range=medium_term`} className={`xs:text-sm sm:text-base hover:text-zinc-50 transition duration-300 ${timeRange === "medium_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                    Last 6 Months
                </Link>
                <Link href={`${url}?range=short_term`} className={`xs:text-sm sm:text-base hover:text-zinc-50 transition duration-300 ${timeRange === "short_term" ? "text-zinc-50 underline underline-offset-4" : "text-zinc-400"}`}>
                    Last 4 Weeks
                </Link>
            </div>
        </nav>
    );
}