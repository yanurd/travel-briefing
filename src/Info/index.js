import './info.css'
import {Search } from '../Search'

import { InfoTitle } from '../InfoTitle';
import { InfoImg } from '../InfoImg';


const Info = () => {

  return (
      <section className="info">
        <InfoTitle>
          <Search/>
        </InfoTitle>
        <InfoImg/>
      </section>
  );
};

export { Info };
