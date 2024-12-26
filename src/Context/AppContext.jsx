import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
    category: [],
  });
  const [isSearched, setIsSearched] = useState(false);

  const [jobs,setJobs] = useState([])

 async function fetchJobs(){
    setJobs(jobs)
  }

  useEffect(()=>{
      fetchJobs()
  },[])

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
