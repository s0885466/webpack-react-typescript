import React from 'react';
import './styles.css';
import IMAGE from './logo.png';
import LOGO from './logo.svg'

export const App = () => {
    return (
        <>
            <h1>Typescript - {process.env.NODE_ENV} {process.env.name}</h1>
            <img src={IMAGE} alt="logo" width="300" height="300"/>
            <img src={LOGO} alt="logo" width="300"/>
        </>
    );
};