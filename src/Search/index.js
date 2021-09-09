import { useContext, useState } from "react";
import { TravelContext } from "../Context";

const Search = () => {
  const { setSearch } = useContext(TravelContext);
  const [value, setValue] = useState("");
  const updateValue = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(value);
  };
  return (
    <div className="info-search">
      <form className="info-form" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={updateValue}
          className="info-form_input"
          type="text"
          placeholder="Venezuela"
        />
        <input className="info-form_search" type="submit" value="Search" />
      </form>
    </div>
  );
};

export { Search };
