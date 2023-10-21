import React from 'react';
import Copyright from './Copyright';
import Info from './Info';

const Footer = () => {
    return (
        <div className='bg-[#aaaaac] max-w-full'>
            <Info></Info>
            <Copyright></Copyright>
        </div>
    );
};

export default Footer;