import React from 'react';
import { Link } from 'react-router-dom';

const Switching = ({ head, link, text }) => {
    return (
        <div className="form-field my-3">
            <div className='form-control justify-center'>
                {head ? head : ""} <Link to={`/entry/${link}`} className='underline'> {text} </Link>
            </div>
        </div>
    );
};

export default Switching;