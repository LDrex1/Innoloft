import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

function Select({ options, name, handleChange, defaultOption }) {
  return (
    <>
      <DropDownList
        name={name}
        className="bg-gray-200 rounded-lg"
        data={options}
        value={defaultOption}
        onChange={handleChange}
      />
    </>
  );
}

export default Select;
