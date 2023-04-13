import { ExternalUrls, Source } from "./SharedTypes";

export type ArtistData = {
  artists: Artist[];
};

export type Artist = {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  id: string;
  images: Source[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type Followers = {
  href: null | undefined;
  total: number;
};
