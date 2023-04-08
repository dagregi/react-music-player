import { searchApi } from "../api/api";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <article className="dark:bg-gray-900 dark:text-white bg-white text-gray-900">
      <h1 className="p-3 mx-auto font-mono text-5xl text-center text-amber-400">
        Placeholder
      </h1>
      <SearchBar onSearch={searchApi} />
    </article>
  );
};

export default Header;
