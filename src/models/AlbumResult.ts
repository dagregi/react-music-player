export type AlbumResult = {
  query: string;
  albums: Albums;
};

export type Albums = {
  totalCount: number;
  items: AlbumsItem[];
  pagingInfo: PagingInfo;
};

export type AlbumsItem = {
  data: Data;
};

export type Data = {
  uri: string;
  name: string;
  artists: Artists;
  coverArt: CoverArt;
  date: DateClass;
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

export type CoverArt = {
  sources: Source[];
};

export type Source = {
  url: string;
  width: number;
  height: number;
};

export type DateClass = {
  year: number;
};

export type PagingInfo = {
  nextOffset: number;
  limit: number;
};
