import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const Home = () => {
    return (
        <>
        <Header />
        <h1>I'am Home Page</h1>
        <Outlet />
        </>

        


    );
}

export default Home;