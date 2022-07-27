import React, { useEffect, useState } from 'react';
import '../styles/Pokedex.css'
import logo from '../assets/pokedes-logo-small.png'
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import capitalizeFirst from '../utilities/capitalizeFirst';
import noCapitalsAndSpaces from '../utilities/noCapitalsAndSpaces';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

    const navigate = useNavigate();
    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [filterType, setFilterType] = useState('');
    const [searchPokemon, setSearchPokemon] = useState('');
    const [page, setPage] = useState(1);

    const pageEnd = 12 * page;
    const pageStart = pageEnd - 12;
    const pokemonsPaginated = pokemons.slice(pageStart, pageEnd);
    const lastPage = Math.ceil(pokemons.length / 12);

    useEffect(() => {
        if (filterType !== '') {
            axios
                .get(`https://pokeapi.co/api/v2/type/${filterType}`)
                .then(res => {
                    setPokemons(res.data.pokemon);
                    setPage(1);
                });
        } else {
            axios
                .get('https://pokeapi.co/api/v2/pokemon?limit=1154')
                .then(res => {
                    setPokemons(res.data.results);
                    setPage(1);
                });
        }
    }, [filterType])

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results))
    }, [])

    const search = e => {
        e.preventDefault();

        if (searchPokemon !== '') {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${noCapitalsAndSpaces(searchPokemon)}`)
                .catch(error => {
                    if (error) {
                        alert('Pokemon not found');
                        setSearchPokemon('');
                    }
                })
                .then(res => {
                    if (res) {
                        navigate(`/pokedex/${res.data.id}`)
                    }
                });
        } else {
            alert('Please enter a pokemon name')
        }
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    const next10Pages = () => {
        setPage(page + 10);
    }

    const prev10Pages = () => {
        setPage(page - 10);
    }

    return (
        <div>
            <header className='header'>
                <div className='header-logo-container'>
                    <img className='header-logo' src={logo} />
                </div>
                <div className='header-dot'></div>
            </header>

            <div className='pokedex-body'>

                <div className='pokedex-top-container'>
                    <h3 className='welcome-text'>
                        <span>Welcome {userName}, </span>
                        here you can find your favorite pokemons.
                    </h3>

                    <div className='filters-container'>
                        <form onSubmit={search} className='search-form'>
                            <input
                                className='search-input'
                                type="text"
                                placeholder='Pokemon name or id'
                                value={searchPokemon}
                                onChange={e => setSearchPokemon(e.target.value)}
                            />
                            <button className='search-btn'>Search</button>
                        </form>

                        <div className='select-container'>
                            <label className='filter-select-label' htmlFor="filter-select">Filter by type </label>
                            <select id='filter-select' onChange={e => setFilterType(e.target.value)}>
                                <option value="">None</option>
                                {types.map(type => (
                                    <option value={type.name} key={type.name}>{capitalizeFirst(type.name)}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                </div>

                {pokemonsPaginated.length !== 0 ? (
                    <>
                        <div className='cards-container'>
                            {pokemonsPaginated.map(pokemon => (
                                <PokemonCard pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                            ))}
                        </div>

                        <div className='pagination'>
                            <button className='pagination-btn' onClick={() => prevPage()} disabled={page === 1}><i className="fa-solid fa-angle-left"></i></button>
                            <button className='pagination-btn' onClick={() => prev10Pages()} disabled={page < 11}><i className="fa-solid fa-angles-left"></i></button>
                            <div>
                                <p className='marginless-txt page-progress'>{page} / {lastPage}</p>
                            </div>
                            <button className='pagination-btn' onClick={() => next10Pages()} disabled={lastPage - page < 10}><i className="fa-solid fa-angles-right"></i></button>
                            <button className='pagination-btn' onClick={() => nextPage()} disabled={page === lastPage}><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                    </>
                ) : (
                    <div className='no-pokemons-container'>
                        <p className='marginless-txt no-pokemons-emoji'><i class="fa-solid fa-face-sad-cry"></i></p>
                        <h3 className='marginless-txt no-pokemons-txt'>No pokemons found</h3>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Pokedex;