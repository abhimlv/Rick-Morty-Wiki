import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber }) => {
    return (
        <div>
            <style jsx>
                {`

                .x:checked + label {
                    background-color:  #be0e0e;
                    color: white;
                }
                input[type="radio"]{
                    display: none;
                }
                `}
            </style>
        <div className="form-check">
                <input
                    onClick={() => {
                        setPageNumber(1);
                        task(items);
                    }}
                    className="form-check-input x"
                    type="radio"
                    name={name}
                    id={`${name}-${index}`} />
                
                <label className="btn btn-outline-danger" htmlFor={`${name}-${index}`}>
                    {items}</label>
      </div>
   
        </div>
        
    );
}

export default FilterBTN