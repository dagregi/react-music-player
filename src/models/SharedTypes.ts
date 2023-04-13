export type ArtistData = {
  uri: string;
  profile: Profiles;
  visuals?: Visuals;
};

export type Profiles = {
  name: string;
};

export type CoverArt = {
  sources: Source[];
};

export type Source = {
  url: string;
  width?: number | null;
  height?: number | null;
};

export type SharingInfo = {
  shareId?: string;
  shareUrl: string;
};

export type Playability = {
  playable: boolean;
  reason?: Reason;
};

export type DateClass = {
  year: number;
};

export type Visuals = {
  avatarImage: AvatarImage;
};

export type AvatarImage = {
  sources: Source[];
};

export type ContentRating = {
  label: Label;
};

export type Duration = {
  totalMilliseconds: number;
};

export type PagingInfo = {
  nextOffset?: number;
  limit: number;
};

export type Copyright = {
  items: CopyrightItem[];
};

export type ExternalUrls = {
  spotify: string;
};

export type CopyrightItem = {
  type: string;
  text: string;
};

export enum Label {
  Explicit = "EXPLICIT",
  None = "NONE",
}

export enum Reason {
  Playable = "PLAYABLE",
}
