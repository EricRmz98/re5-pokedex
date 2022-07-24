import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PokemonCard.css'

const PokemonCard = ({ pokemonUrl }) => {

    const [pokemonInfo, setPokemonInfo] = useState({});

    useEffect(() => {
        axios
            .get(pokemonUrl)
            .then(res => setPokemonInfo(res.data))  
    }, [])

    return (
        <div className='pokemon-card' style={ pokemonInfo.types?.[0].type.name == 'grass' ? {background: 'linear-gradient(#E5FBD1, #73B741)'} : {background: 'linear-gradient(red, blue)'}}>
            <img className='pokemon-img' src={pokemonInfo.sprites?.other['official-artwork'].front_default}/>
            {pokemonInfo.name}
        </div>
    );
};

export default PokemonCard;