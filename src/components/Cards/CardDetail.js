import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CardDetail = () => {

    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, image, origin, location, gender, species, status, type } = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);
    
    return (
        <div className='App bg-black '>
            <div className='container d-flex justify-content-center text-white'>
                <div className='d-flex flex-column gap-3 mb-5'>
                    <h1 className='text-center'>
                        {name}
                    </h1>
                    <img src={image} alt='' className='img-fluid' />
                    
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div
                                    className="badge bg-danger fs-6  text-dark"
                                >
                                    {status}
                                </div>
                            );
                        } else if (status === "Alive") {
                            return (
                                <div
                                    className="badge bg-success fs-6  text-dark"
                                >
                                    {status}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className="badge bg-secondary fs-6 text-black"
                                >
                                    {status}
                                </div>
                            );
                        }
                    })()}
          
        <div className="content text-secondary">
            <div className="text-secondary">
            <span className="fw-bold">Gender : </span>
            {gender}
            </div>
            <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
            </div>
            <div className="">
            <span className="fw-bold">Type: </span>
            {type === ""? "Unknown" : type}
          </div>                
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          
        </div>
      </div>
            </div>
            </div>
  );
};

export default CardDetail;