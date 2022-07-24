import React, { useEffect, useState } from 'react';
import '../styles/Pokedex.css'
import logo from '../assets/pokedes-logo-small.png'
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => setPokemons(res.data.results));
    }, [])

    return (
        <div>
            <header className='header'>
                <div className='header-logo-container'>
                    <img className='header-logo' src={logo} />
                </div>
                <div className='header-dot'></div>
            </header>

            <div className='pokedex-body'>
                <div className='welcome-text-container'>
                    <h3 className='welcome-text marginless-txt'>
                        <span>Welcome {userName}, </span>
                        here you can find your favorite Pokemons.
                    </h3>
                </div>

                <div className='filters-container'>
                    <form className='search-form'>
                        <input
                            className='search-input'
                            type="text"
                            placeholder='Pokemon name'
                        />
                        <button className='search-btn'>Search</button>
                    </form>

                    <div className='select-container'>
                        <label className='filter-select-label' htmlFor="filter-select">Filter by type </label>
                        <select id='filter-select'>
                            <option value="">None</option>

                        </select>
                    </div>

                </div>
                <div className='cards-container'>
                    {pokemons.map(pokemon => (
                        <PokemonCard pokemonUrl={pokemon.url} key={pokemon.url} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pokedex;