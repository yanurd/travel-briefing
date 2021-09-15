import { createContext, useState, useEffect } from "react";

const TravelContext = createContext();

const TravelProvider = (props) => {
  //State Declarations
  const [search, setSearch] = useState("");
  const [briefing, setBriefing] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //Fetching Travel Briefing
  const API = (country) => {
    return `https://travelbriefing.org/${country}?format=json`;
  };
  //Excecutes when search state changes.
  useEffect(() => {
    //Excecutes after 3 seconds
    /* For some reason, this always runs even though
    it is given the [search] second param for the useEffect hook
    in order to avoid fetching, IF has been implemented */
    if (search !== "") {
      setLoading(true);

      setTimeout(() => {
        fetch(API(search))
          .then((response) => response.json())
          .then((data) => {
            setBriefing(data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          });
      }, 3000);
    }
  }, [search]);

  return (
    <TravelContext.Provider
      value={{
        search,
        setSearch,
        briefing,
        setBriefing,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {props.children}
    </TravelContext.Provider>
  );
};

export { TravelContext, TravelProvider };
