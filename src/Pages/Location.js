import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { name , type, dimension } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="App bg-black">
    <div className="container bg-dark">
      <div className="row mb-3">
        <h1 className="text-center text-light my-3 mb-3">
          Location :{" "}
          <span className="text-danger">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center text-secondary">
          Dimension : {dimension === "" ? "Unknown" : dimension}
          </h5>
          <h6 className="text-center text-secondary">
          Type : {type === "" ? "Unknown" : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4 text-danger ms-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setID} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row text-light">
            <Cards page="/Location/" results={results} />
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Location;
