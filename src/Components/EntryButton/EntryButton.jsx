import React from 'react';

const EntryButton = ({ text }) => {
    return (
        <div className="form-field pt-5">
            <div className="form-control justify-between">
                <button type="button" className="btn bg-black text-white rounded-md w-full">{text}</button>
            </div>
        </div>
    );
};

export default EntryButton;