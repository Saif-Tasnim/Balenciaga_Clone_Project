import React from 'react';
import img1 from '../../assets/Shopping/1.jpg'
import img2 from '../../assets/Shopping/2.jpg'
import img3 from '../../assets/Shopping/3.jpg'
import img4 from '../../assets/Shopping/La4.jpg'
import img5 from '../../assets/Shopping/5.jpg'
import ProductCard from '../ProductCard/ProductCard';

const ProductDemo = () => {
    const imgList = [img1, img2, img3, img4, img5];

    return (
        <div>
            {
                imgList.map((image, index) =>
                    <ProductCard
                        image={image}
                        key={index}
                        index={index}
                    ></ProductCard>)
            }
        </div>
    );
};

export default ProductDemo;