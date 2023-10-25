import React from 'react';

const InputField = ({ head, type }) => {
    return (
        <div className="form-field mb-4">
            <label className="form-label"> <span>{head} <sup>*</sup></span> </label>
            <input type={type} className="input max-w-full border-black rounded-md" />
        </div>
    );
};

export default InputField;