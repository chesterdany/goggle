import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";

import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext();
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }
  switch (location.pathname) {
    case "/search":
      return "Search";

    default:
      return "Error";
  }
};

export default Results;
