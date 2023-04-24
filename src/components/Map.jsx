import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

function Map({ center }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_KEY,
  });
  return (
    <>
      <div className="w-[100%] h-[200px] ">
        {isLoaded ? (
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div>LOADING MAP...</div>
        )}
      </div>
    </>
  );
}

export default Map;
