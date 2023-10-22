import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import bookmark from '../../assets/bookmark.png';

const Header = () => {

    const link = <>
        {/* new Arrivals */}

        <div className="dropdown dropdown-hover">
            <label className="navbar-item uppercase text-sm w-28 hover:border-[1px] hover:border-[#242424] hover:p-1 hover:rounded-md" tabIndex="0">New Arrival</label>
            <div className="dropdown-menu dropdown-menu-bottom-right mt-5 rounded-md border-[1px] border-black flex flex-row w-[400px] h-[80px] justify-between items-center">
                <div className='border-r-[1px] border-black h-full'>
                    <Link to='/womenPage' className="dropdown-item text-sm hover:underline mr-8 mt-2"> New Arrivals - Women </Link>
                </div>
                <div>
                    <Link to='/menPage' tabIndex="-1" className="dropdown-item text-sm hover:underline mr-7"> New Arrivals - Men </Link>
                </div>

            </div>
        </div>

        {/* Women */}
        <div className="dropdown dropdown-hover">
            <label className="navbar-item uppercase text-sm w-28 hover:border-[1px] hover:border-[#242424] hover:p-1 hover:rounded-md" tabIndex="0">Women</label>
            <div className="dropdown-menu dropdown-menu-bottom-right mt-5 rounded-md border-[1px] border-black">
                <Link to='/womenPage' className="dropdown-item text-sm hover:underline"> Women </Link>
                <Link to='/womenPage' tabIndex="-1" className="dropdown-item text-sm hover:underline"> Women Dress </Link>
               
            </div>
        </div>

        {/* Men */}
        <div className="dropdown dropdown-hover">
            <label className="navbar-item uppercase text-sm w-28 hover:border-[1px] hover:border-[#242424] hover:p-1 hover:rounded-md" tabIndex="0">Men</label>
            <div className="dropdown-menu dropdown-menu-bottom-right mt-5 rounded-md border-[1px] border-black">
                <Link to='/menPage' className="dropdown-item text-sm hover:underline"> Men </Link>
                <Link to='/menPage' tabIndex="-1" className="dropdown-item text-sm hover:underline">Men Dress</Link>
                
            </div>
        </div>

        {/* gifts */}
        <div className="dropdown dropdown-hover">
            <label className="navbar-item uppercase text-sm w-28 hover:border-[1px] hover:border-[#242424] hover:p-1 hover:rounded-md" tabIndex="0">Gifts</label>
            <div className="dropdown-menu dropdown-menu-bottom-right mt-5 rounded-md border-[1px] border-black">
                <Link className="dropdown-item text-sm hover:underline">Gifts</Link>
                <Link to='/menPage' tabIndex="-1" className="dropdown-item text-sm hover:underline">Men</Link>
                <Link to='/womenPage' tabIndex="-1" className="dropdown-item text-sm hover:underline">Women</Link>
            </div>
        </div>

        {/* Explore */}
        <div className="dropdown dropdown-hover">
            <label className="navbar-item uppercase text-sm w-28 hover:border-[1px] hover:border-[#242424] hover:p-1 hover:rounded-md" tabIndex="0">Explore</label>
            
        </div>
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