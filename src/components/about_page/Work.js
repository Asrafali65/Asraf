import React from "react";
import Languages from "./Languages";
import Describe from "./Describe";

function Service(props) {
  return (
    <div className="aboutpage__work__wrapper">
      {/* component */}
      <Describe />
      <Languages />
    </div>
  );
}

export default Service;
