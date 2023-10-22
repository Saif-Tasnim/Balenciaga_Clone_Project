import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const WomenPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // console.log(data);

    const womenData = data.filter(d => d.for === "Female")
    
    // console.log(womenData);

    return (
        <div className='grid grid-cols-2 gap-5 max-w-[94%] mx-auto'>
           {
            womenData.map(wd => 
            <ProductCard
            singleData={wd}
            ></ProductCard>)
           }
        </div>
    );
};

export default WomenPage;