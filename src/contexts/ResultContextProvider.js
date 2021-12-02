import { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = process.env.REACT_APP_BASE_URL;

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    console.log(baseUrl);
    const response = await axios.get(`${baseUrl}${type}`, {
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "342fed366bmsh71946c23c7129b0p180c7fjsn0f48379781cd",
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
