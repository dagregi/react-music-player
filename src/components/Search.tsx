import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "../utils";
import { search } from "../api/services";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("");
  const [{ album, artist, track }, setIsClicked] = useState({
    artist: false,
    track: false,
    album: false,
  });

  const debouncedSearch = useDebounce(searchValue, 650);
  const debouncedType = useDebounce(type, 500);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const { data, isLoading } = useQuery(
    ["search", debouncedType],
    () => search(debouncedSearch, debouncedType),
    {
      enabled: Boolean(debouncedSearch && debouncedType),
    }
  );

  return (
    <section className="max-w-full">
      <div className="w-full p-2 border-none bg-cat-crust">
        <div className="container mx-auto p-2">
          <input
            type="search"
            className="w-full rounded-full transition ease-in-out delay-150
            block py-4 px-6 leading-tight shadow-md placeholder:italic
            focus:outline-none bg-cat-base
            text-cat-text
            focus:scale-105 duration-200"
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputChange}
          />
          <div className="my-2 w-full flex">
            <button
              className={`bg-inherit px-3 py-2 outline-none text-center mx-auto text-cat-text rounded-lg text-xs ${
                album ? " border border-cat-lavender" : ""
              }`}
              onClick={() => {
                setType("albums");
                setIsClicked({ album: !album, artist: false, track: false });
              }}
            >
              Albums
            </button>
            <button
              className={`bg-inherit px-3 py-2 outline-none text-center mx-auto text-cat-text rounded-lg text-xs ${
                artist ? " border border-cat-lavender" : ""
              }`}
              onClick={() => {
                setType("artists");
                setIsClicked({ album: false, artist: !artist, track: false });
              }}
            >
              Artists
            </button>
            <button
              className={`bg-inherit px-3 py-2 outline-none text-center mx-auto text-cat-text rounded-lg text-xs ${
                track ? " border border-cat-lavender" : ""
              }`}
              onClick={() => {
                setType("tracks");
                setIsClicked({ album: false, artist: false, track: !track });
              }}
            >
              Tracks
            </button>
          </div>
        </div>
        <div className="mx-auto p-2">
          {isLoading ? (
            <FaSpinner
              size={20}
              className="animate-spin fill-cat-mauve mx-auto text-center"
            />
          ) : (
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
              {album
                ? data?.albums?.items?.map((album) => (
                    <AlbumCard key={album?.data?.id} album={album?.data} />
                  ))
                : artist
                ? data?.artists?.items?.map((artist) => (
                    <ArtistCard key={artist?.data?.uri} artist={artist?.data} />
                  ))
                : track &&
                  data?.tracks?.items?.map((track) => (
                    <TrackCard key={track?.data?.id} track={track?.data} />
                  ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
