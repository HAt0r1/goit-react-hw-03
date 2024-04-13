import { useId } from "react";

import style from "./SearchBox.module.css";

const SearchBox = ({ value, valueFunc }) => {
  const filterId = useId();

  return (
    <div className={style.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        value={value}
        className={style.input}
        type="text"
        id={filterId}
        onChange={(event) => valueFunc(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
