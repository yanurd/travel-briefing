import { useContext } from "react";
import { TravelContext } from "../Context";

import './index.css'
const Country = (props) => {
  const { briefing } = useContext(TravelContext);

  return (
    <section className="country">
      <div className="country-item">
        <h2 className="country-item_name">{briefing.names?.name}</h2>
      </div>
      {props.children}
    </section>
  );
};

export { Country };
