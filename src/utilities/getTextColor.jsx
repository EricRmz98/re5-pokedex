import React from 'react';

const getTextColor = type => {
    switch (type) {
        case 'grass':
            return ({ color: '#416460' });
            break;

        case 'fire':
            return ({ color: '#E75C35' });
            break;

        case 'water':
            return ({ color: '#1479FB' });
            break;

        case 'bug':
            return ({ color: '#4AB648' });
            break;

        case 'normal':
            return ({ color: '#735259' });
            break;

        case 'fighting':
            return ({ color: '#96402A' });
            break;

        case 'poison':
            return ({ color: '#5B3184' });
            break;

        case 'ghost':
            return ({ color: '#323569' });
            break;

        case 'rock':
            return ({ color: '#7E7E7E' });
            break;

        case 'dark':
            return ({ color: '#030706' });
            break;

        case 'ice':
            return ({ color: '#6FBEDF' });
            break;

        case 'steel':
            return ({ color: '#5E736C' });
            break;

        case 'dragon':
            return ({ color: '#478A93' });
            break;

        case 'psychic':
            return ({ color: '#971B45' });
            break;

        case 'flying':
            return ({ color: '#0C1395' });
            break;

        case 'ground':
            return ({ color: '#654008' });
            break;

        case 'fairy':
            return ({ color: '#E090DE' });
            break;

        case 'electric':
            return ({ color: '#E89301' });
            break;

        case 'shadow':
            return ({ color: '#5E4C9A' });
            break;

        case 'unknown':
            return ({ color: '#71A494' });
            break;
    }
};

export default getTextColor;