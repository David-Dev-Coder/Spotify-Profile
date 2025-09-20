export interface Image {
    url: string;
}

export interface Album {
    name: string;
    images: Image[];
}

export interface Artist {
    name: string;
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