import { useContext } from "react";
import { CountryFlag } from "../CountryFlag";
import { CountryLanguages } from "../CountryLanguages";
import { Country } from "../Country";
import { TravelContext } from "../Context";
import { Header } from "../Header";
import { Info } from "../Info";
import { CountryPhone } from "../CountryPhone";
import { CountryElectricity } from "../CountryElectricity";
import { CountryCurrency } from "../CountryCurrency";
import { CountryWaterSafety } from "../CountryWaterSafety";
import { CountryVaccinations } from "../CountryVaccination";
const AppUi = () => {
  const { loading, error, briefing } = useContext(TravelContext);
  const briefArray = Object.entries(briefing);
  return (
    <main>
      <Header />
      <Info />
      {error && <h1>Error!</h1>}
      {loading && <h1>Cargando...</h1>}
      {!!briefArray.length && (
        <Country>
          <CountryFlag flag={briefing.names}/>
          <CountryLanguages />
          <CountryPhone/>
          <CountryElectricity/>
          <CountryCurrency/>
          <CountryWaterSafety/>
          {
            briefing.vaccinations && <CountryVaccinations/>
          }
          
        </Country>
      )}
    </main>
  );
};

export { AppUi };
