//Images
import desktop from "../img/desktop.svg";
import mobile from "../img/mobile.svg";
const InfoImg = () => {
  return (
    <div className="img">
      <picture>
        <source media="(min-width: 470px)" srcSet={desktop} />
        <img src={mobile} alt="Car background" />
      </picture>
    </div>
  );
};

export { InfoImg };
