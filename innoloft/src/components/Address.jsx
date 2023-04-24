import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Map from "./Map";

function Address({ company, map }) {
  const { name, logo, address } = company || {};
  const { country, city, street, house, longitude, latitude } = address || {};
  const center = { lat: +latitude, lng: +longitude };
  return (
    <>
      <div className="flex items-center">
        <CiLocationOn />
        <p className="ps-2 w-[240px]">
          {`${house} ${street} ${city?.name} ${country?.name}`}
        </p>
      </div>
      <div className="mt-2">
        <Map map={false} center={center} />
      </div>
    </>
  );
}

export default Address;
