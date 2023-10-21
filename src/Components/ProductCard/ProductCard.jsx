import React from 'react';


const ProductCard = ({ image, index }) => {

    // console.log(index);

    let productName;

    if (index === 0) productName = "LE CAGOLE SLING";
    else if (index === 1) productName = "WINTER 23"
    else if (index === 2) productName = "STEROID BOOTIE"
    else if (index == 3) productName = "WINTER 23"
    else productName = "RUNNER SNEAKER"

    return (

        <div
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            className='max-w-full h-[120vh] relative'
        >
            <div className='absolute bottom-3 left-[45%]'>
                <h1 className={`font-bold text-2xl ${index===4 ? 'text-white' : 'text-black'}`}> {productName} </h1>
                <button className='btn border-2 border-black rounded-md my-4 ml-3 hover:bg-green-600 hover:text-white'>
                    Shop Now
                </button>
            </div>

         

        </div>
    );
};

export default ProductCard;