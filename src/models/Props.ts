import { Track } from "./Data";

export type MusicCardProps = {
  track: Track;
};

export type SearchBarProps = {
  onSearch: (searchValue: string) => void;
};
