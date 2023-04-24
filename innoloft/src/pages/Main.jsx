import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h2
        className="p-2 text-5xl shadow-emerald-100 cursor-pointer shadow-md rounded-md font-semibold  bg-gray-200"
        onClick={() => navigate("/products/view")}
      >
        View
      </h2>
      <h2
        className="p-2 m-4 text-5xl shadow-emerald-100 cursor-pointer shadow-md font-semibold rounded-md bg-gray-200"
        onClick={() => navigate("/products/edit")}
      >
        Edit
      </h2>
    </div>
  );
}

export default Main;
