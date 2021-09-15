import { useContext } from "react";
import { TravelContext } from "../Context";

const CountryCurrency = () => {
  const { briefing } = useContext(TravelContext);
  const currency = briefing.currency;
  return (
    <div className="country-item">
      <ul className="country-item_list">
        <li key={currency.name}>Currency: {currency.name}</li>
        <li key={currency.symbol}>Symbol: {currency.symbol}</li>
      </ul>
    </div>
  );
};

export { CountryCurrency };
