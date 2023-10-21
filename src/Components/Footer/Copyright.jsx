import moment from 'moment/moment';
import React from 'react';

const Copyright = () => {
    return (
        <div className='text-black text-center text-sm p-7'>
            &copy; {moment().format("YYYY")} Balenciaga
        </div>
    );
};

export default Copyright;