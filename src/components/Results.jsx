import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";

import { useResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
  let navigate = useNavigate();
  const { getResults, results, searchTerm, isLoading } = useResultContext();

  if (isLoading) {
    <Loading />;
  }

  console.log(navigate);
};

export default Results;
