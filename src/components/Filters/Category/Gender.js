import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({setPageNumber, setgender}) => {
    let genders = ["Male", "Female", "Unknown", "Genderless"]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header ">
        <button
          className="accordion-button collapsed bg-black text-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3 bg-dark">
                  {genders.map((items, index) => (
                      <FilterBTN setPageNumber={setPageNumber} task={setgender} key={index} name="gender" index={index} items={items} />
                  ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
