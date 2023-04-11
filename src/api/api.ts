import axios from "axios";
import { Album, Track } from "../models/Data";

const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com";

export const searchApi = axios.create({
  method: "GET",
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const searchArtist = (artist: string) =>
  searchApi
    .get<Track[]>(`/search?q=${artist}`)
    .then((response) => response.data);

export const getAlbum = (albumId: string | undefined) =>
  searchApi.get<Album>(`/album/${albumId}`).then((response) => response.data);
