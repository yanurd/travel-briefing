const CountryFlag = ({ flag }) => {
  const { name, fullName, iso2 } = flag;
  return (
    <div className="country-item">
      <h2 className="country-item_name">Flag:</h2>
      <img
        src={`https://flagcdn.com/32x24/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/64x48/${iso2.toLowerCase()}.png 2x`}
        width="32"
        height="24"
        alt={name}
        title={fullName}
      />
    </div>
  );
};

export { CountryFlag };
