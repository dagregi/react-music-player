import axios from "axios";

export const apiService = axios.create({
  method: "GET",
  baseURL: "https://spotify23.p.rapidapi.com/search/",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
});

export const searchAlbum = (album: string) =>
  apiService
    .get(`/search/?q=${album}&type=albums`)
    .then((response) => response.data);

export const searchArtist = (artist: string) =>
  apiService
    .get(`/search/?q=${artist}&type=artists`)
    .then((response) => response.data);

export const searchTrack = (track: string) =>
  apiService
    .get(`/search/?q=${track}&type=tracks`)
    .then((response) => response.data);

export const getAlbums = (albumId: string | undefined) =>
  apiService.get(`/albums/?ids=${albumId}`).then((response) => response.data);

export const getArtists = (artistId: string | undefined) =>
  apiService.get(`/artists/?ids=${artistId}`).then((response) => response.data);

export const getArtistOverview = (artistId: string | undefined) =>
  apiService.get(`/artist_overview/?id=${artistId}`).then((res) => res.data);
