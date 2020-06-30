import React from "react";

const VariantSelector = ({ option, handleOptionChange }) => {
  return (
    <select
      className="Product__option"
      name={option.name}
      key={option.name}
      onChange={handleOptionChange}
    >
      {option.values.map((value) => {
        return (
          <option
            value={value}
            key={`${option.name}-${value}`}
          >{`${value}`}</option>
        );
      })}
    </select>
  );
};

export default VariantSelector;
