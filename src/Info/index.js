import "./info.css";
import { Search } from "../Search";

import { InfoTitle } from "../InfoTitle";

const Info = () => {
  return (
    <section className="info">
      <InfoTitle />
      <Search />
    </section>
  );
};

export { Info };
