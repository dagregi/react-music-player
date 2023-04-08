import MusicCard from "../components/MusicCard";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import Header from "../components/Header";
import { Track } from "../models/Data";
import { useQuery } from "react-query";
import { searchArtist } from "../api/api";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const { data, status } = useQuery(
    "tracks",
    async () => await searchArtist("shadow of intent")
  );

  const toggleMode = () => {
    setIsDark(!isDark);
  };
  return (
    <section className={`${isDark ? "dark" : ""}`}>
      <Header />
      <div className="w-full dark:bg-gray-900 dark:text-white bg-white text-gray-900">
        <div className="flex justify-center items-center py-4">
          {isDark ? (
            <MdDarkMode onClick={toggleMode} />
          ) : (
            <MdLightMode onClick={toggleMode} />
          )}
        </div>
        <div className="flex flex-col mx-auto p-2">
          <div className="m-2">
            {data?.data?.map((track) => (
              <MusicCard key={track.id} track={track} imageSize="md" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
