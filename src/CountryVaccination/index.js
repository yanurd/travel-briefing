import { useContext } from "react";
import { TravelContext } from "../Context";

const CountryVaccinations = () => {
  const { briefing } = useContext(TravelContext);
  const { vaccinations } = briefing;

  return (
    <>
      <div className="country-item">
        <ul className="country-item_list">
          {vaccinations.map((vaccination) => (
            <li key={vaccination.name}>{vaccination.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export { CountryVaccinations };
