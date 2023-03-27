import React from "react";
import Locations from "./Locations";
import Form from "./Form";

const LocationFormWrapper = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-between mt-20 border-b border-dark-grey pb-4 mb-16">
      <Locations />
      <Form />
    </div>
  );
};

export default LocationFormWrapper;
