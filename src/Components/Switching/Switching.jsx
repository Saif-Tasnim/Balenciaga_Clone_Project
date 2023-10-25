import React from 'react';
import { Link } from 'react-router-dom';

const Switching = ({ head, link, text }) => {
    return (
        <div className='my-3'>
            {head ? head : ""} <Link to={`/entry/${link}`} className='underline'> {text} </Link>
        </div>
    );
};

export default Switching;