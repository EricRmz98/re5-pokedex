import React from 'react';
import { useSelector } from 'react-redux';
const Pokedex = () => {

    const userName = useSelector(state => state.userName);

    return (
        <div>
            <header>
                
            </header>
        </div>
    );
};

export default Pokedex;