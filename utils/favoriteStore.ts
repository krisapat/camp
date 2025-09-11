// /store/favoriteStore.ts
import { create } from "zustand";

interface FavoriteState {
  map: Record<string, string>; // landmarkId -> favoriteId
  setMap: (map: Record<string, string>) => void;
  toggleOptimistic: (landmarkId: string) => void;
  setFavoriteId: (landmarkId: string, favoriteId: string) => void;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  map: {},
  setMap: (map) => set({ map }),
  toggleOptimistic: (landmarkId) => {
    const map = { ...get().map };
    if (map[landmarkId]) delete map[landmarkId];
    else map[landmarkId] = "temp"; // placeholder until server returns favoriteId
    set({ map });
  },
  setFavoriteId: (landmarkId, favoriteId) => {
    const map = { ...get().map };
    map[landmarkId] = favoriteId;
    set({ map });
  },
}));
