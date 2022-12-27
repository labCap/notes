import React from "react";
import { MdSearch } from "react-icons/md";

export const Search = ({ searchText, setSearchText = (f) => f }) => {
  return (
    <div className="search">
      <MdSearch className="search__icon" size={"1.3em"} />
      <input
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};
