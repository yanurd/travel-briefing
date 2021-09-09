import { useContext } from "react";
import { BriefCard } from "../BriefCard";
import { BriefMap } from "../BriefMap";
import { TravelContext } from "../Context";
import { Header } from "../Header";
import { Info } from "../Info";

const AppUi = () => {
  const { loading, error } = useContext(TravelContext);
  return (
    <main>
      <Header />
      <Info />
      {error && <h1>Error!</h1>}
      {loading && <h1>Cargando...</h1>}
      { 
        (!loading && error===false)
          &&
          (<BriefCard>
            <BriefMap/>
          </BriefCard>)
      }
    </main>
  );
};

export { AppUi };
