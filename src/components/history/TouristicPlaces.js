import React from "react";
import "./TouristicPlacesStyles.css";

import romania1 from "../../assets/romania1.jpg";
import romania2 from "../../assets/romania2.jpg";
import romania3 from "../../assets/romania3.jpg";
import romania4 from "../../assets/Citadel-Rasnov-Romania.jpg";
import romania6 from "../../assets/romania3.jpg";
import romania7 from "../../assets/romania2.jpg";
import SelectsImg from "../SelectsImg/SelectsImg";

function TouristicPlaces() {
  return (
    <div name="views" className="touristicplaces">
      <div className="container">
        <SelectsImg bgImg={romania1}  />
        <SelectsImg bgImg={romania2}  />
        <SelectsImg bgImg={romania3}  />
        <SelectsImg bgImg={romania4}  />
        <SelectsImg bgImg={romania6}  />
        <SelectsImg bgImg={romania7}  />
      </div>
    </div>
  );
}

export default TouristicPlaces;
