import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { SearchBarProps } from "../models/Props";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full max-w-sm mx-auto mt-8">
      <div className="flex items-center dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-700">
        <input
          type="text"
          className="rounded-full transition ease-in-out delay-150
          w-full py-4 px-6 leading-tight shadow-lg placeholder:italic
          focus:outline-none bg-white dark:bg-gray-800
          dark:text-gray-100 text-gray-700
          focus:scale-105 duration-200"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <MdSearch size={25} className="relative right-10" />
      </div>
    </form>
  );
};

export default SearchBar;
