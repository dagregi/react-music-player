export type ArtistResult = {
  query: string;
  artists: Artists;
};

export type Artists = {
  totalCount: number;
  items: Item[];
  pagingInfo: PagingInfo;
};

export type Item = {
  data: Data;
};

export type Data = {
  uri: string;
  profile: Profile;
  visuals: Visuals;
};

export type Profile = {
  name: string;
};

export type Visuals = {
  avatarImage: AvatarImage;
};

export type AvatarImage = {
  sources: Source[];
};

export type Source = {
  url: string;
  width: number;
  height: number;
};

export type PagingInfo = {
  nextOffset: number;
  limit: number;
};
