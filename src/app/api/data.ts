export async function getRecentlyPlayedTracks(session: any) {
    if (session && session.accessToken) {
        const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data.items;
    }
}

export async function getUserData(session: any) {
    const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
    });
    const data = await response.json();
    return data;
}

export async function fetchPlaylists(session: any) {
    if (session && session.accessToken) {
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data.items;
    }
}

export async function getFollowingArtists(session: any) {
    if (session && session.accessToken) {
        const response = await fetch("https://api.spotify.com/v1/me/following?type=artist", {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data.artists.items;
    }
}

export async function getTopArtists(session: any, timeRange: string = "medium_term") {
    if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${timeRange}`, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data.items;
    }
}
