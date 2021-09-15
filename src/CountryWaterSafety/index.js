import { useContext } from "react";
import { TravelContext } from "../Context";

const CountryWaterSafety = () => {
  const { briefing } = useContext(TravelContext);
  const waterSafety= briefing.water

  return (
    <div className="country-item">
      <p className="country-item_name">{waterSafety.short.toUpperCase()}</p>
    </div>
  );
};

export { CountryWaterSafety };
