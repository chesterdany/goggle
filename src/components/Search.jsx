import { useState, useEffect } from "react-router-dom";
import { useDebounce } from "use-debounce/lib";

import Links from "./Links";

// add search bar !!

const Search = () => {
  return (
    <div>
      <p>Search</p>
      <Links />
    </div>
  );
};

export default Search;
