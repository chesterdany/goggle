import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  let location = useLocation();
  const { getResults, results, searchTerm, isLoading } = useResultContext();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/images") {
        getResults(`/images/q=${searchTerm}`);
      } else if (location.pathname === "/news") {
        getResults(`/news/q=${searchTerm}`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=5`);
      }
    }
  }, [searchTerm, location.pathname]);

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
      return (
        <div className="flex flex-wrap justifu-center items-center">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return "news";

    default:
      return "Error";
  }
};

export default Results;
