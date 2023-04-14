import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchArtist, searchTrack } from "../api/services";
import { useDebounce } from "../utils";
import TrackCard from "../components/TrackCard";
import ArtistCard from "../components/ArtistCard";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const { data, isLoading } = useQuery(
    ["tracks", debouncedSearch],
    () => searchArtist(debouncedSearch),
    {
      enabled: Boolean(debouncedSearch),
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
        </div>
        <div className="mx-auto p-2">
          {isLoading ? (
            <FaSpinner
              size={20}
              className="animate-spin fill-cat-mauve mx-auto text-center"
            />
          ) : (
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
              {/* {data?.tracks?.items?.map((track) => ( */}
              {/*   <TrackCard key={track?.data?.id} track={track?.data} /> */}
              {/* ))} */}
              {data?.artists?.items?.map((artist) => (
                <ArtistCard key={artist?.data?.uri} artist={artist?.data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
