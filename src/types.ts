import type { Artist, Playlist, PublicUser } from "spotify-types";

export interface ProfileProps {
    user: PublicUser;
    playlists: Playlist[];
    following: Artist[];
}

export interface Image {
    url: string;
}

export interface Album {
    name: string;
    images: Image[];
}

export interface Track {
    name: string;
    album: Album;
    artists: Artist[];
    duration_ms: number;
}

export interface RecentItem {
    track: Track;
}

export interface SidebarItemType {
    route: string;
    icon: string;
    text: string;
    id: number;
    name: string;
}