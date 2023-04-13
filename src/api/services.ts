import axios from "axios";
import { Album, Artist, Track } from "../models/Data";

export const apiService = axios.create({
  method: "GET",
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const searchTrack = (artist: string) =>
  apiService
    .get<Track[]>(`/search?q=${artist}`)
    .then((response) => response.data);

export const getAlbum = (albumId: string | undefined) =>
  apiService.get<Album>(`/album/${albumId}`).then((response) => response.data);

export const getArtist = (artistId: string | undefined) =>
  apiService
    .get<Artist>(`/artist/${artistId}`)
    .then((response) => response.data);

export const getTopSongs = (artistId: string | undefined) =>
  apiService
    .get<Track[]>(`/artist/${artistId}/top?limit=50`)
    .then((res) => res.data);
