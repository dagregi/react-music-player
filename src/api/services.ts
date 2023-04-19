import axios from "axios";
import { AlbumData } from "../models/AlbumData";
import { ArtistData } from "../models/ArtistData";
import { ArtistOverview } from "../models/ArtistOverview";
import { SearchResult } from "../models/SearchResult";

export const apiService = axios.create({
  method: "GET",
  baseURL: "https://spotify23.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
});

export const search = (query: string, type: string): Promise<SearchResult> =>
  apiService
    .get<SearchResult>(`/search/?q=${query}&type=${type}`)
    .then((response) => response.data);

export const getAlbums = (albumId: string | undefined): Promise<AlbumData> =>
  apiService
    .get<AlbumData>(`/albums/?ids=${albumId}`)
    .then((response) => response.data);

export const getArtists = (artistId: string | undefined): Promise<ArtistData> =>
  apiService
    .get<ArtistData>(`/artists/?ids=${artistId}`)
    .then((response) => response.data);

export const getArtistOverview = (
  artistId: string | undefined
): Promise<ArtistOverview> =>
  apiService
    .get<ArtistOverview>(`/artist_overview/?id=${artistId}`)
    .then((res) => res.data);
