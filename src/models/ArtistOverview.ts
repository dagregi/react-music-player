import { Artists } from "./SearchResult";
import {
  ContentRating,
  Copyright,
  CoverArt,
  DateClass,
  Duration,
  PagingInfo,
  Playability,
  Profiles,
  SharingInfo,
  Source,
  Visuals,
} from "./SharedTypes";

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
  releases: AlbumReleases;
};

export type AlbumReleases = {
  items: AlbumItem[];
};

export type AlbumItem = {
  id: string;
  uri: string;
  name: string;
  type: LatestType;
  copyright: Copyright;
  date: Date;
  coverArt: CoverArt;
  tracks: Tracks;
  label: string;
  playability: Playability;
  sharingInfo: SharingInfo;
};

export type Date = {
  year: number;
  month: number;
  day: number;
  precision: Precision;
};

export enum Precision {
  Day = "DAY",
}

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
  date: DateClass;
  coverArt: CoverArt;
  tracks: Tracks;
  label: string;
  playability: Playability;
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
  artists: Artists;
  album: Albums;
};

export type Goods = {
  events: Events;
  merch: Merch;
};

export type Events = {
  userLocation: Profile;
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
  profile: Profile;
  visuals?: Visuals;
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
  location: Profile;
  coordinates: Coordinates;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
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
  name: string;
  verified?: boolean;
  pinnedItem?: null | undefined;
  biography?: Biography;
  externalLinks?: ExternalLinks;
  playlists?: Albums;
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
  artists: Artists;
  coverArt: CoverArt;
  date: DateClass;
  sharingInfo: SharingInfo;
};

export type DiscoveredOn = {
  totalCount: number;
  items: DiscoveredOnItem[];
};

export type DiscoveredOnItem = {
  uri: string;
  id: string;
  owner: Profiles;
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
  sources: Source[];
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
