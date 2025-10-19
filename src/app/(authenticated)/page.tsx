import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { fetchPlaylists, getFollowingArtists, getUserData } from "../api/data";
import ProfileDisplay from "@/components/profile/ProfileDisplay";
import { ProfileProps } from "@/types";

export default async function Home() {
    const session = await getServerSession(nextAuthOptions);

    const [userData, playlists, following]: [ProfileProps['user'], ProfileProps['playlists'], ProfileProps['following']] = await Promise.all([
        getUserData(session),
        fetchPlaylists(session),
        getFollowingArtists(session),
    ]);

    const props: ProfileProps = {
        user: userData,
        playlists: playlists,
        following: following,
    };

    return <ProfileDisplay {...props} />;
}