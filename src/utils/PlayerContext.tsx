import { createContext, FC, ReactNode, useContext, useState } from "react";
import Player from "../components/Player";
import { music } from "../data/data";
import {
  CurrentMusicType,
  defaultMusic,
  PlayerContextType,
} from "../models/PlayerTypes";

const PlayerContext = createContext<PlayerContextType>({
  playList: music,
  currentMusic: defaultMusic,
  setCurrentMusic: () => { },
});

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState<CurrentMusicType>(defaultMusic);

  const setCurrentMusic = (val: Partial<CurrentMusicType>, replace = false) => {
    if (replace && val.src !== current.src) {
      setCurrent(val as CurrentMusicType);
    } else {
      setCurrent((prev) => ({ ...prev, ...val }));
    }
  };

  return (
    <PlayerContext.Provider
      value={{ currentMusic: current, setCurrentMusic, playList: music }}
    >
      {children}
      {current.src && <Player />}
    </PlayerContext.Provider>
  );
};
