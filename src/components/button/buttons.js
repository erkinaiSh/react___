import React from "react";
import "./button.css";

const Button = () => {
  return (
    <div class="btn">
      <button className="button">
        <span>Region:</span>Southeastern Europe
      </button>
      <button className="button">
        <span>Capital:</span>Bucharest
      </button>
      <button className="button">
        <span>Population:</span>19,237,691 (61th Rank)
      </button>
      <button className="button">
        <span>Size:</span>238,391 km² (83th Largest)
      </button>
      <button className="button">
        <span>Language:</span> Romanian
      </button>
      <button className="button">
        <span>Density:</span>84 per Km2
      </button>
      <button className="button">
        <span>Currency:</span>Romanian leu
      </button>
      <button className="button">
        <span>National flower:</span>Romanian Peony
      </button>
      <button className="button">
        <span>National dish:</span>Sarmale
      </button>
    </div>
  );
};

export default Button;
