import React from 'react';
import Header from './Components/Header';

const img = "https://i.pinimg.com/originals/0d/4b/2b/0d4b2b319c96d857928eb8cd6c86b2d4.png";

const Error =() => {
    return (
        <>
        <Header />

        <img src={img} alt="" />

        </>

    );
}

export default Error;