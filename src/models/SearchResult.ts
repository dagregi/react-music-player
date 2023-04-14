import {
  ArtistData,
  ContentRating,
  CoverArt,
  DateClass,
  Duration,
  PagingInfo,
  Playability,
  SharingInfo,
} from "./SharedTypes";

export type SearchResult = {
  query: string;
  albums?: Albums;
  artists?: Artists;
  tracks?: Tracks;
};

export type Albums = {
  totalCount?: number;
  items: AlbumItem[];
  pagingInfo?: PagingInfo;
};

export type Artists = {
  totalCount?: number;
  items: ArtistItem[];
  pagingInfo?: PagingInfo;
};

export type Tracks = {
  totalCount: number;
  items: TrackItem[];
  pagingInfo: PagingInfo;
};

export type AlbumItem = {
  data: AlbumData;
};

export type ArtistItem = {
  data: ArtistData;
};

export type TrackItem = {
  data: TrackData;
};

export type AlbumData = {
  uri: string;
  name?: string;
  artists?: Artists;
  coverArt: CoverArt;
  id?: string;
  sharingInfo?: SharingInfo;
  date?: DateClass;
};

export type TrackData = {
  uri: string;
  id: string;
  name: string;
  albumOfTrack: AlbumData;
  artists: Artists;
  contentRating: ContentRating;
  duration: Duration;
  playability: Playability;
};
