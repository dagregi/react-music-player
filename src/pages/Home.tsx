import MusicCard from "../components/MusicCard";
import { MdDarkMode, MdLightMode, MdRefresh } from "react-icons/md";
import { useState } from "react";
import { useQuery } from "react-query";
import { searchArtist } from "../api/api";
import Header from "../components/Header";

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const { data, isLoading } = useQuery(
    "tracks",
    async () => await searchArtist("shadow of intent")
  );

  const toggleMode = () => {
    setIsDark(!isDark);
  };
  return (
    <section className={`w-screen ${isDark ? "dark" : ""}`}>
      <Header />
      <div className="w-full p-2 border-none dark:bg-gray-950 dark:text-white bg-stone-100 text-gray-900">
        <div className="container mx-auto p-2">
          <input
            type="search"
            className="w-full rounded-full transition ease-in-out delay-150
            block py-4 px-6 leading-tight shadow-md placeholder:italic
            focus:outline-none bg-white dark:bg-gray-800
            dark:text-gray-100 text-gray-700
            focus:scale-105 duration-200"
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center items-center py-4">
          {isDark ? (
            <MdLightMode onClick={toggleMode} />
          ) : (
            <MdDarkMode onClick={toggleMode} />
          )}
        </div>
        <div className="mx-auto p-2">
          {isLoading ? (
            <MdRefresh size={25} className="animate-spin mx-auto text-center" />
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
