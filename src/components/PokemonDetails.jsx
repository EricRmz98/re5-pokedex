import React, { useEffect, useState } from 'react';
import logo from '../assets/pokedes-logo-small.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/PokemonDetails.css'
import noImage from '../assets/no-image.png'
import getGradientBackground from '../utilities/getGradientBackground';
import getTextColor from '../utilities/getTextColor';
import capitalizeFirst from '../utilities/capitalizeFirst';
import getSolidBackground from '../utilities/getSolidBackground';

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState({});


    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemonInfo(res.data))
    }, [id])

    const textColor = getTextColor(pokemonInfo.types?.[0].type.name);
    const gradientBackground = getGradientBackground(pokemonInfo.types?.[0].type.name);
    const solidBackground = getSolidBackground(pokemonInfo.types?.[0].type.name);

    return (
        <div>
            <header className='header'>
                <div className='header-logo-container'>
                    <img className='header-logo' src={logo} />
                </div>
                <div className='header-dot'></div>
            </header>

            <div className='details-body'>
                <div className='details-container'>
                    <div className='details-background' style={gradientBackground}>
                        <div className='details-image-container'>
                            <img
                                className='pokemon-card-img'
                                src={pokemonInfo.sprites?.other['official-artwork'].front_default ? pokemonInfo.sprites?.other['official-artwork'].front_default : noImage}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = noImage;
                                }}
                            />
                        </div>
                    </div>

                    <div className='details-id-father'>
                        <div className='details-id-child'>
                            <h1 className='marginless-txt light-txt'>#{pokemonInfo.id}</h1>
                        </div>
                    </div>

                    <div className='midline-father-center'>
                        <div className='midline-child-center'>
                            <h1 className='marginless-txt' style={textColor}>{pokemonInfo.name && capitalizeFirst(pokemonInfo.name)}</h1>
                        </div>
                    </div>

                    <div className='weight-height-father'>
                        <div className='weight-height-child'>
                            <p className='marginless-txt light-txt'>Weight</p>
                            <h2 className='marginless-txt weightless-txt'>{pokemonInfo.weight}</h2>
                        </div>
                        <div className='weight-height-child'>
                            <p className='marginless-txt light-txt'>Height</p>
                            <h2 className='marginless-txt weightless-txt'>{pokemonInfo.height}</h2>
                        </div>
                    </div>

                    <div className='type-abilities-container'>
                        <div className='type-abilities-card'>
                            <div className='type-abilities-card-title'><h3 className='marginless-txt weightless-txt light-txt'>Type</h3></div>
                            {pokemonInfo.types?.length === 1 ? (
                                <div className='types-container' style={solidBackground}><p className='weightless-txt marginless-txt white-txt'>{pokemonInfo.types?.[0].type.name && capitalizeFirst(pokemonInfo.types?.[0].type.name)}</p></div>
                            ) : (
                                <>
                                    <div className='types-container' style={solidBackground}><p className='weightless-txt marginless-txt white-txt'>{pokemonInfo.types?.[0].type.name && capitalizeFirst(pokemonInfo.types?.[0].type.name)}</p></div>
                                    <div className='types-container' style={getSolidBackground(pokemonInfo.types?.[1].type.name)}><p className='weightless-txt marginless-txt white-txt'>{pokemonInfo.types?.[1].type.name && capitalizeFirst(pokemonInfo.types?.[1].type.name)}</p></div>
                                </>
                            )}
                        </div>

                        <div className='type-abilities-card'>
                            <div className='type-abilities-card-title'><h3 className='marginless-txt weightless-txt light-txt'>Abilities</h3></div>


                            {pokemonInfo.abilities?.length === 1 ? (
                                <div className='abilities-container'><p className='weightless-txt marginless-txt light-txt'>{pokemonInfo.abilities?.[0].ability.name && capitalizeFirst(pokemonInfo.abilities?.[0].ability.name)}</p></div>
                            ) : (
                                <>
                                    <div className='abilities-container'><p className='weightless-txt marginless-txt light-txt'>{pokemonInfo.abilities?.[0].ability.name && capitalizeFirst(pokemonInfo.abilities?.[0].ability.name)}</p></div>
                                    <div className='abilities-container'><p className='weightless-txt marginless-txt light-txt'>{pokemonInfo.abilities?.[1].ability.name && capitalizeFirst(pokemonInfo.abilities?.[1].ability.name)}</p></div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className='midline-father'>
                        <div className='midline-child'>
                            <h1 className='marginless-txt' style={textColor}>Stats</h1>
                        </div>
                    </div>

                    <div className='stats-container'>
                        <div className='bar-container'>
                            <div className='bar-info'>
                                <h2 className='weightless-txt marginless-txt'>HP</h2>
                                <h2 className='weightless-txt marginless-txt'>{pokemonInfo.stats?.[0].base_stat}/150</h2>
                            </div>

                            <div className='bar-void'>
                                <div className='bar-progress' style={{width: `calc(100% / 150 * ${pokemonInfo.stats?.[0].base_stat})`,} }>
                                </div>
                            </div>
                        </div>

                        <div className='bar-container'>
                            <div className='bar-info'>
                                <h2 className='weightless-txt marginless-txt'>Attack</h2>
                                <h2 className='weightless-txt marginless-txt'>{pokemonInfo.stats?.[1].base_stat}/150</h2>
                            </div>

                            <div className='bar-void'>
                                <div className='bar-progress' style={{width: `calc(100% / 150 * ${pokemonInfo.stats?.[1].base_stat})`,} }>
                                </div>
                            </div>

                            <div className='bar-container'>
                            <div className='bar-info'>
                                <h2 className='weightless-txt marginless-txt'>Defense</h2>
                                <h2 className='weightless-txt marginless-txt'>{pokemonInfo.stats?.[2].base_stat}/150</h2>
                            </div>

                            <div className='bar-void'>
                                <div className='bar-progress' style={{width: `calc(100% / 150 * ${pokemonInfo.stats?.[2].base_stat})`,} }>
                                </div>
                            </div>
                        </div>

                        <div className='bar-container'>
                            <div className='bar-info'>
                                <h2 className='weightless-txt marginless-txt'>Speed</h2>
                                <h2 className='weightless-txt marginless-txt'>{pokemonInfo.stats?.[5].base_stat}/150</h2>
                            </div>

                            <div className='bar-void'>
                                <div className='bar-progress' style={{width: `calc(100% / 150 * ${pokemonInfo.stats?.[5].base_stat})`,} }>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>

                    <div className='midline-father'>
                        <div className='midline-child'>
                            <h1 className='marginless-txt' style={textColor}>Movements</h1>
                        </div>
                    </div>

                    <div className="movements-father">
                       <div className='movements-container'>
                            {pokemonInfo.moves?.map(move => (
                                <p className='marginless-txt movement-item' key={move.move.name}>{move.move.name}</p>
                            ))}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;