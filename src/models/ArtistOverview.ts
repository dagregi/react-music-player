export type ArtistOverview = {
  data: Data;
  extensions: Extensions;
};

export type Data = {
  artist: Artist;
};

export type Artist = {
  id: string;
  uri: string;
  following: boolean;
  sharingInfo: SharingInfo;
  profile: Profile;
  visuals: ArtistVisuals;
  discography: Discography;
  stats: Stats;
  relatedContent: RelatedContent;
  goods: Goods;
};

export type Discography = {
  latest: Latest;
  popularReleases: Albums;
  singles: Albums;
  albums: Albums;
  compilations: Albums;
  topTracks: TopTracks;
};

export type Albums = {
  totalCount: number;
  items: AlbumsItem[];
};

export type AlbumsItem = {
  releases: PurpleReleases;
};

export type PurpleReleases = {
  items: PurpleItem[];
};

export type PurpleItem = {
  id: string;
  uri: string;
  name: string;
  type: LatestType;
  copyright: Copyright;
  date: PurpleDate;
  coverArt: CoverArt;
  tracks: Tracks;
  label: Name;
  playability: Playability;
  sharingInfo: SharingInfo;
};

export type Copyright = {
  items: CopyrightItem[];
};

export type CopyrightItem = {
  type: PurpleType;
  text: string;
};

export enum PurpleType {
  C = "C",
  P = "P",
}

export type CoverArt = {
  sources: ItemSource[];
};

export type ItemSource = {
  url: string;
  width: number | null;
  height: number | null;
};

export type PurpleDate = {
  year: number;
  month: number;
  day: number;
  precision: Precision;
};

export enum Precision {
  Day = "DAY",
}

export enum Name {
  ShadowOfIntent = "Shadow of Intent",
}

export type Playability = {
  playable: boolean;
  reason: Reason;
};

export enum Reason {
  Playable = "PLAYABLE",
}

export type SharingInfo = {
  shareId: string;
  shareUrl: string;
};

export type Tracks = {
  totalCount: number;
};

export enum LatestType {
  Album = "ALBUM",
  Ep = "EP",
  Single = "SINGLE",
}

export type Latest = {
  id: string;
  uri: string;
  name: string;
  type: LatestType;
  copyright: Copyright;
  date: LatestDate;
  coverArt: CoverArt;
  tracks: Tracks;
  label: Name;
  playability: Playability;
};

export type LatestDate = {
  year: number;
};

export type TopTracks = {
  items: TopTracksItem[];
};

export type TopTracksItem = {
  uid: string;
  track: Track;
};

export type Track = {
  id: string;
  uri: string;
  name: string;
  playcount: string;
  discNumber: number;
  duration: Duration;
  playability: Playability;
  contentRating: ContentRating;
  artists: TrackArtists;
  album: Album;
};

export type Album = {
  uri: string;
  coverArt: AlbumCoverArt;
};

export type AlbumCoverArt = {
  sources: PurpleSource[];
};

export type PurpleSource = {
  url: string;
};

export type TrackArtists = {
  items: FluffyItem[];
};

export type FluffyItem = {
  uri: string;
  profile: UserLocation;
};

export type UserLocation = {
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

export type Goods = {
  events: Events;
  merch: Merch;
};

export type Events = {
  userLocation: UserLocation;
  concerts: Concerts;
};

export type Concerts = {
  totalCount: number;
  items: ConcertsItem[];
  pagingInfo: PagingInfo;
};

export type ConcertsItem = {
  uri: string;
  id: string;
  title: string;
  category: string;
  festival: boolean;
  nearUser: boolean;
  venue: Venue;
  artists: PurpleArtists;
  partnerLinks: PartnerLinks;
  date: FluffyDate;
};

export type PurpleArtists = {
  items: RelatedArtistsItem[];
};

export type RelatedArtistsItem = {
  uri: string;
  id: string;
  profile: UserLocation;
  visuals?: ItemVisuals;
};

export type ItemVisuals = {
  avatarImage: CoverArt;
};

export type FluffyDate = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  isoString: string;
  precision: string;
};

export type PartnerLinks = {
  items: PartnerLinksItem[];
};

export type PartnerLinksItem = {
  partnerName: string;
  url: string;
};

export type Venue = {
  name: string;
  location: UserLocation;
  coordinates: Coordinates;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type PagingInfo = {
  limit: number;
};

export type Merch = {
  items: MerchItem[];
};

export type MerchItem = {
  uri: string;
  description: string;
  imageUri: string;
  name: string;
  url: string;
};

export type Profile = {
  name: Name;
  verified: boolean;
  pinnedItem: null;
  biography: Biography;
  externalLinks: ExternalLinks;
  playlists: Albums;
};

export type Biography = {
  text: string;
};

export type ExternalLinks = {
  items: ExternalLinksItem[];
};

export type ExternalLinksItem = {
  name: string;
  url: string;
};

export type RelatedContent = {
  appearsOn: AppearsOn;
  featuring: DiscoveredOn;
  discoveredOn: DiscoveredOn;
  relatedArtists: RelatedArtists;
};

export type AppearsOn = {
  totalCount: number;
  items: AppearsOnItem[];
};

export type AppearsOnItem = {
  releases: FluffyReleases;
};

export type FluffyReleases = {
  totalCount: number;
  items: TentacledItem[];
};

export type TentacledItem = {
  uri: string;
  id: string;
  name: string;
  artists: TrackArtists;
  coverArt: CoverArt;
  date: LatestDate;
  sharingInfo: SharingInfo;
};

export type DiscoveredOn = {
  totalCount: number;
  items: DiscoveredOnItem[];
};

export type DiscoveredOnItem = {
  uri: string;
  id: string;
  owner: UserLocation;
  name: string;
  description: string;
  images: Images;
};

export type Images = {
  totalCount: number;
  items: CoverArt[];
};

export type RelatedArtists = {
  totalCount: number;
  items: RelatedArtistsItem[];
};

export type Stats = {
  followers: number;
  monthlyListeners: number;
  worldRank: number;
  topCities: TopCities;
};

export type TopCities = {
  items: TopCitiesItem[];
};

export type TopCitiesItem = {
  numberOfListeners: number;
  city: string;
  country: string;
  region: string;
};

export type ArtistVisuals = {
  gallery: Gallery;
  avatarImage: RImage;
  headerImage: RImage;
};

export type RImage = {
  sources: ItemSource[];
  extractedColors: ExtractedColors;
};

export type ExtractedColors = {
  colorRaw: ColorRaw;
};

export type ColorRaw = {
  hex: string;
};

export type Gallery = {
  items: CoverArt[];
};

export type Extensions = {
  cacheControl: CacheControl;
};

export type CacheControl = {
  version: number;
  hints: any[];
};
