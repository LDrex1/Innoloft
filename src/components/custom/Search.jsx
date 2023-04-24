import React from "react";
import InputText from "./InputText";

function Search({ icon }) {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">{icon}</span>
      </div>
      <InputText />
    </div>
  );
}

export default Search;
