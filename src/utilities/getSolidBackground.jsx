import React from 'react';

const getSolidBackground = (type) => {
    switch (type) {
        case 'grass':
            return ({ background: '#416460' });
            break;

        case 'fire':
            return ({ background: '#E75C35' });
            break;

        case 'water':
            return ({ background: '#1479FB' });
            break;

        case 'bug':
            return ({ background: '#4AB648' });
            break;

        case 'normal':
            return ({ background: '#735259' });
            break;

        case 'fighting':
            return ({ background: '#96402A' });
            break;

        case 'poison':
            return ({ background: '#5B3184' });
            break;

        case 'ghost':
            return ({ background: '#323569' });
            break;

        case 'rock':
            return ({ background: '#7E7E7E' });
            break;

        case 'dark':
            return ({ background: '#030706' });
            break;

        case 'ice':
            return ({ background: '#6FBEDF' });
            break;

        case 'steel':
            return ({ background: '#5E736C' });
            break;

        case 'dragon':
            return ({ background: '#478A93' });
            break;

        case 'psychic':
            return ({ background: '#971B45' });
            break;

        case 'flying':
            return ({ background: '#0C1395' });
            break;

        case 'ground':
            return ({ background: '#654008' });
            break;

        case 'fairy':
            return ({ background: '#E090DE' });
            break;

        case 'electric':
            return ({ background: '#E89301' });
            break;

        case 'shadow':
            return ({ background: '#5E4C9A' });
            break;

        case 'unknown':
            return ({ background: '#71A494' });
            break;
    }
};

export default getSolidBackground;