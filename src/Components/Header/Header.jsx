import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import bookmark from '../../assets/bookmark.png';

const Header = () => {

    const link = <>
        <Link className="navbar-item uppercase text-sm w-28 hover:border-[1px] hover:border-[#242424] hover:p-1 hover:rounded-md">New Arrival </Link>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> Women </Link>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> Men </Link>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> Gifts </Link>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> Couture </Link>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> Explore </Link>
    </>

    const lastLink = <>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> Client Service </Link>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> Login </Link>
        <Link className="navbar-item uppercase text-sm hover:border-[1px] hover:border-[#242424] hover:p-2 hover:rounded-md"> <img src={bookmark} className='w-5' alt="" /> </Link>
    </>


    return (
        <div className="navbar shadow-none border-b-[1px] border-[#000000] py-0 pb-2 fixed z-10">

            <div className="navbar-start">
                {
                    link
                }
            </div>

            <div className="navbar-center">
                <Link className="navbar-item">
                    {/* <img src={logo} className='w-24' alt="" /> */}
                    <h1 className='font-bold text-2xl'>Balenciaga</h1>
                </Link>
            </div>

            <div className="navbar-end">
                {
                    lastLink
                }
            </div>
        </div>
    );
};

export default Header;