import { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = process.env.REACT_APP_BASE_URL;

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Js Mastery");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await axios.get(`${baseUrl}${type}`, {
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": process.env.REACT_APP_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
    setResults(response.data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
