import React from 'react';
import SearchBox from '../../Components/SearchBox/SearchBox';
import ProductDemo from '../../Components/ProductDemo/ProductDemo';

const HomePage = () => {
    return (
        <div>
           <SearchBox></SearchBox>
           <ProductDemo></ProductDemo>
        </div>
    );
};

export default HomePage;