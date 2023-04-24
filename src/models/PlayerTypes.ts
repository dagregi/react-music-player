import { Music } from "../data/data";

export interface CurrentMusicType extends Music {
  duration?: number;
  curTime?: number;
  isPlaying?: boolean;
}
export type PlayerContextType = {
  currentMusic: CurrentMusicType;
  setCurrentMusic: (cm: Partial<CurrentMusicType>, replace?: boolean) => void;
  playList: Music[];
};
