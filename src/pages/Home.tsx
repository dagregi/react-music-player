import MusicCard from "../components/MusicCard";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchArtist } from "../api/api";
import Header from "../components/Header";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // const debounceSearchValue = useDebounce(searchValue, 500);
  const { data, isLoading } = useQuery(
    ["tracks", searchValue],
    () => searchArtist(searchValue),
    { enabled: Boolean(searchValue) }
  );

  return (
    <section className="w-screen">
      <Header />
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
            <div className="grid md:grid-cols-3 gap-4">
              {data?.data?.map((track) => (
                <MusicCard key={track.id} track={track} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
