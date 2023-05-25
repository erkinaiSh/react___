import React from "react";
import "./AboutStyles.css";

import romania5 from "../../assets/romania_karta.gif";
import romania4 from "../../assets/romania_flag.png";
import romania2 from "../../assets/romania1.jpg";
import romania3 from "../../assets/romania2.jpg";
import romania1 from "../../assets/romania3.jpg";

function About() {
  return (
    <div name="about" className="about">
      <div className="container">
        <div className="img-container">
          <img src={romania5} alt="/" />
          <img src={romania4} alt="/" />
          <img src={romania2} alt="/" />
          <img src={romania3} alt="/" />
          <img src={romania1} alt="/" />
        </div>
        <h2>Romania in Brief!</h2>
        <h4>
          Romania borders the Black Sea to the southeast and has borders with
          Bulgaria, Hungary, Moldova and Serbia. In its lower course, the Danube
          forms the southern border between Romania and Ukraine before flowing
          into the Black Sea. In the Black Sea, Romania shares a maritime border
          with Turkey. Romania has been a member state of the European Union
          since 1 January 2007. The Romanian territory covers an area of 238,391
          km²; this makes it slightly smaller than the United Kingdom (242,900
          km²) or slightly smaller than the US state of Oregon. Romania has a
          population of 19.1 million people (in 2021); the capital and largest
          city is Bucharest, with a population of 2 million. The official
          language is Romanian. The main religion is Christianity, with 87%
          Eastern Orthodox, 5% Protestant and 5% Roman Catholic adherents.
        </h4>
      </div>
    </div>
  );
}

export default About;
