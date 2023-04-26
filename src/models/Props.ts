import { RefObject } from "react";
import { AlbumItem, Track } from "./ArtistOverview";
import { CurrentMusicType } from "./PlayerTypes";
import { AlbumData, TrackData } from "./SearchResult";
import { ArtistData } from "./SharedTypes";
import { Item } from "./AlbumData";

export type TrackCardProps = {
  track: TrackData;
};

export type TrackListProps = {
  track: Track | Item;
  index: number;
  page: "artist" | "album";
};

export type PlayerSliderProps = {
  size: string;
  currentMusic: CurrentMusicType;
  audioRef: RefObject<HTMLAudioElement | undefined>;
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
