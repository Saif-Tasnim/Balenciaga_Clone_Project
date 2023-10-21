import React from 'react';

const Info = () => {
    return (
        <div className='border-t-[1px] border-b-[1px] border-black flex text-xs'>
            
            <div className='border-r-[1px] border-black h-[330px] pt-3'>
                <p className='uppercase mb-2 p-2'> Newsletter </p>
                <p className='underline cursor-pointer mr-10 p-2'> Subscribe to our newsletter </p>
            </div>

            <div className='border-r-[1px] border-black h-[330px] px-5 pt-3'>
                <p className='uppercase p-2'> CLIENT SERVICES </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> FAQ </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Track Orders </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Returns </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Delivery </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Payments </p>
            </div>

            <div className='border-r-[1px] border-black h-[330px] px-5 pt-3'>
                <p className='uppercase p-2'> THE COMPANY </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Careers </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Careers - Design </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Legal </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Privacy Policy and Cookies</p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Cookies Settings </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> World Food Programme </p>
            </div>

            <div className='border-r-[1px] border-black h-[330px] px-5 pt-3'>
                <p className='uppercase p-2'> CONNECT </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Facebook</p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Instagram </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Tiktok </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Spotify </p>
            </div>


            <div className='border-r-[1px] border-black h-[330px] px-5 pt-3'>
                <p className='uppercase p-2'> BOUTIQUES </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Find a store nearby </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Country / Region: International Version  </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> Language: English </p>

            </div>

            <div className='border-r-[1px] border-black h-[330px] px-6 pt-3'>
                <p className='uppercase p-2'> CONTACT US </p>
                <p className='hover:underline cursor-pointer mr-10 p-2'> CALL US AT </p>
                <p className='underline cursor-pointer mr-10 p-2'> +44 20 33 18 60 32 </p>
                <p className='underline cursor-pointer mr-10 p-2'> SEND US AN EMAIL </p>
               
            </div>

        </div>
    );
};

export default Info;