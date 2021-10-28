import React from 'react';
import Events from '../Events/Events';
import Benner from '../Benner/Benner';

const Home = () => {
    return (
        <div style={{backgroundColor:'#f8fafc'}}>
            <Benner></Benner>
            <Events></Events>    
        </div>
    );
};

export default Home;