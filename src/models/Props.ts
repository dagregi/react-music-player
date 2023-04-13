import { Track } from "./Data";

export type MusicCardProps = {
  track: Track;
};

export type TopTracksProps = {
  track: Track;
  index: number;
};

export type SearchBarProps = {
  onSearch: (searchValue: string) => void;
};
