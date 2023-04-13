export type TrackResult = {
  query: string;
  tracks: Tracks;
};

export type Tracks = {
  totalCount: number;
  items: TracksItem[];
  pagingInfo: PagingInfo;
};

export type TracksItem = {
  data: Data;
};

export type Data = {
  uri: string;
  id: string;
  name: string;
  albumOfTrack: AlbumOfTrack;
  artists: Artists;
  contentRating: ContentRating;
  duration: Duration;
  playability: Playability;
};

export type AlbumOfTrack = {
  uri: string;
  name: string;
  coverArt: CoverArt;
  id: string;
  sharingInfo: SharingInfo;
};

export type CoverArt = {
  sources: Source[];
};

export type Source = {
  url: string;
  width: number;
  height: number;
};

export type SharingInfo = {
  shareUrl: string;
};

export type Artists = {
  items: ArtistsItem[];
};

export type ArtistsItem = {
  uri: string;
  profile: Profile;
};

export type Profile = {
  name: string;
};

export type ContentRating = {
  label: Label;
};

export enum Label {
  Explicit = "EXPLICIT",
  None = "NONE",
}

export type Duration = {
  totalMilliseconds: number;
};

export type Playability = {
  playable: boolean;
};

export type PagingInfo = {
  nextOffset: number;
  limit: number;
};
