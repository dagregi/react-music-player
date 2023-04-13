import { CopyrightItem, ExternalUrls, Source } from "./SharedTypes";

export type AlbumData = {
  albums: Album[];
};

export type Album = {
  album_group: string;
  album_type: string;
  artists: Artist[];
  copyrights: CopyrightItem[];
  external_ids: Externalids;
  external_urls: ExternalUrls;
  genres: any[];
  id: string;
  images: Source[];
  is_playable: boolean;
  label: string;
  name: string;
  popularity: number;
  release_date: Date;
  release_date_precision: string;
  total_tracks: number;
  tracks: Tracks;
  type: string;
  uri: string;
};

export type Artist = {
  external_urls: ExternalUrls;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
};

export enum ArtistType {
  Artist = "artist",
}

export type Externalids = {
  upc: string;
};

export type Tracks = {
  items: Item[];
  limit: number;
  next: null | undefined;
  offset: number;
  previous: null | undefined;
  total: number;
};

export type Item = {
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: ItemType;
  uri: string;
};

export enum ItemType {
  Track = "track",
}
