import React from 'react';
import searchIcon from '../../assets/search_icon.png';

const SearchBox = () => {
    return (
        <div className='pt-[55px] flex gap-1 border-b-[1px] border-black items-center'>
             <img src={searchIcon} 
             className='w-5 h-5 ml-8'
             alt="" />
            <input className="input-block input border-0 rounded-none text-black" placeholder="WHAT ARE YOU LOOKING FOR ?" />
        </div>
    );
};

export default SearchBox;