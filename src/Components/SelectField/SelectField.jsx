import React from 'react';

const SelectField = ({ head, options }) => {
    return (
        <div>
            <label className="form-label"> <span> {head} <sup>*</sup></span> </label>
            <select className="select select-block border-black rounded-md mt-1 mb-4">
                {
                    options.map(op => <option> {op} </option>)
                }
                
            </select>

        </div>
    );
};

export default SelectField;