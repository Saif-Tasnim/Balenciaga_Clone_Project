import React from 'react';

const AgreeCheckBox = ({ text }) => {

    return (
        <div className='mb-7'>
            <label className="flex cursor-pointer gap-2">
                <input type="checkbox" className="checkbox" />
                <span>
                    {text}
                </span>
            </label>
        </div>
    );
};

export default AgreeCheckBox;