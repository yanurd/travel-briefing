import { useContext } from "react";
import { TravelContext } from "../Context";

const CountryLanguages = () => {
  const { briefing } = useContext(TravelContext);
  const languages = briefing.language;
  return (
    <>
      <div className="country-item">
        <ul className="country-item_list">
          {languages.map((language) => (
            <li key={language.language}>{language.language}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { CountryLanguages };
