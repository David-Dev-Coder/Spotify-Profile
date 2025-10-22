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

export async function getUserPlaylists(session: any, limit: number = 50) {
    if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/me/playlists?limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data.items;
    }
}

export async function getPlaylist(session: any, playlistId: string) {
    if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data;
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

export async function getTopArtists(session: any, timeRange: string = "medium_term", limit: number = 50) {
    if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${timeRange}`, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data.items;
    }
}

export async function getTopTracks(session: any, timeRange: string = "medium_term", limit: number = 50) {
    if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${timeRange}`, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data.items;
    }
}

export async function getArtistDetails(session: any, artistId: string) {
    if (session && session.accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const data = await response.json();
        return data;
    }
}