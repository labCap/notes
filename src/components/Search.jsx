import React from "react";
import { MdSearch } from "react-icons/md";

export const Search = () => {
  return (
    <div className="search">
      <MdSearch className="search__icon" size={"1.3em"} />
      <input type="text" placeholder="Type to search..." />
    </div>
  );
};
