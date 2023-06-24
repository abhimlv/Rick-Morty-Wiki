import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({setSpecies, setPageNumber}) => {
    let species = [
        "Human",
        "Alien",
        "Robot",
        "Planet",
        "Animal",
        "Disease",
        "Unknown",
        "Humanoid",
        "Cronenberg",
        "Mythological",
        "Poopybutthole"
      ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header ">
        <button
          className="accordion-button collapsed bg-black text-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3 bg-dark">
        {species.map((items, index) => (
            <FilterBTN
                task={setSpecies}
                setPageNumber={setPageNumber}
                key={index} name="species" index={index} items={items} />))}
        </div>
      </div>
    </div>
  );
};

export default Species;
