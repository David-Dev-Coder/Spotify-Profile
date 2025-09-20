'use client';

import { createContext, useContext, useState } from 'react';

interface items {
    route: string;
    imageSrc: string;
    text: string;
    id: number;
}

interface SidebarContextData {
    index: Number;
    items: items[];
    updateItemIndex: (newIndex: string | number) => void;
}

const SidebarContext = createContext<SidebarContextData>({} as SidebarContextData);

export function useSidebar(): SidebarContextData{
   return useContext(SidebarContext);
}

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
    const items = [
        { route: "/", imageSrc: "/profile.svg", text: "Profile", id: 0, name: "profile" },
        { route: "/artists", imageSrc: "/microphone.svg", text: "Top Artists", id: 1, name: "top-artists" },
        { route: "/tracks", imageSrc: "/music.svg", text: "Top Tracks", id: 2, name: "top-tracks" },
        { route: "/recent", imageSrc: "/time.svg", text: "Recent", id: 3, name: "recent" },
        { route: "/playlists", imageSrc: "/list.svg", text: "Playlists", id: 4, name: "playlists" }
    ]

    const [index, setIndex] = useState<Number>(0);

    const updateItemIndex = (newIndex: string | number) => {
        if (typeof newIndex === 'string') {
            const indexItem = items.find(obj => obj.name === newIndex);
            if (indexItem) {
                if (indexItem.id != index) {
                    setIndex(indexItem.id);
                }
            }
        } else {
            if (newIndex != index) {
                setIndex(newIndex);
            }
        }
    };

    return (
        <SidebarContext.Provider value={{ index, items, updateItemIndex }}>
            {children}
        </SidebarContext.Provider>
    );
}