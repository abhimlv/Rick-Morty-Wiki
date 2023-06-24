import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setPageNumber, setgender, setSpecies }) => {
  
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setgender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 md-5 ">
      <div className="text-center fw-bold ms-3 fs-4 mb-4 my-5">Filters</div>
    
      <div className="accordion ms-3" id="accordionExample" >
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setgender={setgender} setPageNumber={setPageNumber} />
      </div>
      <div onClick={clear} style={{ cursor: "pointer"}}className="text-center text-danger text-decoration ms-3 fs-5 mt-5"
      >
        Clear Filters
      </div>

    </div>
  );
};

export default Filters;
