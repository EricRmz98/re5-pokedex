import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PokemonCard.css'
import capitalizeFirst from '../utilities/capitalizeFirst';
import noImage from '../assets/no-image.png'
import { useNavigate } from 'react-router-dom';
import getGradientBackground from '../utilities/getGradientBackground';
import getTextColor from '../utilities/getTextColor';

const PokemonCard = ({ pokemonUrl }) => {
    const navigate = useNavigate();
    const [pokemonInfo, setPokemonInfo] = useState({});

    useEffect(() => {
        axios
            .get(pokemonUrl)
            .then(res => setPokemonInfo(res.data));
    }, [])

    const textColor = getTextColor(pokemonInfo.types?.[0].type.name);
    const gradientBackground = getGradientBackground(pokemonInfo.types?.[0].type.name);

    return (
        <div onClick={() => navigate(`/pokedex/${pokemonInfo.id}`)} className='pokemon-card' style={gradientBackground}>
            <div className='image-card-container'>
                <img
                    className='pokemon-card-img'
                    src={pokemonInfo.sprites?.other['official-artwork'].front_default ? pokemonInfo.sprites?.other['official-artwork'].front_default : noImage}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noImage ;
                    }}
                />
            </div>

            <div className='card-info-container'>
                <div className='card-info-header'>
                    <h3 className='marginless-txt' style={textColor}>
                        {pokemonInfo.name && capitalizeFirst(pokemonInfo.name)}
                    </h3>
                    <p className='marginless-txt light-txt'><small>Type</small></p>
                    <p className='marginless-txt'>
                        {pokemonInfo.types?.length === 1 ?
                            (pokemonInfo.types?.[0].type.name && capitalizeFirst(pokemonInfo.types?.[0].type.name))
                            :
                            `${pokemonInfo.types?.[0].type.name && capitalizeFirst(pokemonInfo.types?.[0].type.name)} / ${pokemonInfo.types?.[1].type.name && capitalizeFirst(pokemonInfo.types?.[1].type.name)}`}
                    </p>
                </div>

                <div className='card-info-info'>
                    <div className='card-info-info-row'>
                        <div className='card-info-info-stat'>
                            <p className='marginless-txt light-txt'><small>HP</small></p>
                            <h3 className='marginless-txt' style={textColor}>
                                {pokemonInfo.stats?.[0].base_stat}
                            </h3>
                        </div>
                        <div className='card-info-info-stat'>
                            <p className='marginless-txt light-txt'><small>Attack</small></p>
                            <h3 className='marginless-txt' style={textColor}>
                                {pokemonInfo.stats?.[1].base_stat}
                            </h3>
                        </div>
                    </div>

                    <div className='card-info-info-row'>
                        <div className='card-info-info-stat'>
                            <p className='marginless-txt light-txt'><small>Defense</small></p>
                            <h3 className='marginless-txt' style={textColor}>
                                {pokemonInfo.stats?.[2].base_stat}
                            </h3>
                        </div>
                        <div className='card-info-info-stat'>
                            <p className='marginless-txt light-txt'><small>Speed</small></p>
                            <h3 className='marginless-txt' style={textColor}>
                                {pokemonInfo.stats?.[5].base_stat}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;