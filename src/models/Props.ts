import { MutableRefObject } from "react";
import { AlbumItem, Track } from "./ArtistOverview";
import { CurrentMusicType } from "./PlayerTypes";
import { AlbumData, TrackData } from "./SearchResult";
import { ArtistData } from "./SharedTypes";

export type TrackCardProps = {
  track: TrackData;
};

export type TrackListProps = {
  track: Track;
  index: number;
  page: "artist" | "album";
};

export type PlayerSliderProps = {
  size: string;
  currentMusic: CurrentMusicType;
  audioRef: MutableRefObject<HTMLAudioElement | undefined>;
};

export type ArtistCardProps = {
  artist: ArtistData;
};

export type AlbumCardProps = {
  album: AlbumData;
};

export type AlbumScrollProps = {
  album: AlbumItem;
};

export type SearchBarProps = {
  onSearch: (searchValue: string) => void;
};
