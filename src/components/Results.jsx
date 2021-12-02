import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";

import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  let location = useLocation();
  const { getResults, results, searchTerm, isLoading } = useResultContext();

  useEffect(() => {
    getResults("/search/q=daniel+brendea&num=5");
  }, []);

  if (isLoading) return <Loading />;

  console.log(results);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return "images";
    case "/videos":
      return "videos";
    case "/news":
      return "news";

    default:
      return "Error";
  }
};

export default Results;
