import React from 'react';
import './ProductCard.css';

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
            {/* <div className='absolute bottom-4 left-[45%]'>
                <h1 className='font-bold text-2xl'> {productName} </h1>
                <button className='btn border-2 border-black rounded-md my-4'>
                    <span className='relative'>
                        <span className='opacity-0 absolute bottom-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                            Shop Now
                        </span>
                        <span className='group-hover:translate-y-[-2px] transition-transform duration-300 ease-in-out'>
                            Shop Now
                        </span>
                    </span>
                </button>
            </div> */}

            <div className='absolute bottom-4 left-[45%]'>
                <h1 className='font-bold text-2xl'>{productName}</h1>
                <button className='btn border-2 border-black rounded-md my-4'>
                    <span className='text-invisible'>
                        Shop Now
                    </span>
                </button>
            </div>


        </div>
    );
};

export default ProductCard;