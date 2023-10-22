import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const MenPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // console.log(data);

    const menData = data.filter(d => d.for === "Male")

    // console.log(womenData);

    return (
        <div className='grid grid-cols-2 gap-5 max-w-[94%] mx-auto'>
            {
                menData.map(md =>
                    <ProductCard
                        singleData={md}
                    ></ProductCard>)
            }
        </div>
    );
};

export default MenPage;