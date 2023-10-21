import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import SearchBox from '../Components/SearchBox/SearchBox';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <SearchBox></SearchBox>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;