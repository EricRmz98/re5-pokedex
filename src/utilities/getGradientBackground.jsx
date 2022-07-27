import React from 'react';

const getGradientBackground = type => {
    switch (type) {
        case 'grass':
            return ({ background: 'linear-gradient(#7EC6C5,#ABDAC6,#CAE099)' });
            break;

        case 'fire':
            return ({ background: 'linear-gradient(#F96D6F,#E35825,#E8AE1B)' });
            break;

        case 'water':
            return ({ background: 'linear-gradient(#133258,#1479FB,#82B2F1)' });
            break;

        case 'bug':
            return ({ background: 'linear-gradient(#62DB60,#3BB039,#AAFFA8)' });
            break;

        case 'normal':
            return ({ background: 'linear-gradient(#735259,#BC6B7C,#7C3F4C)' });
            break;

        case 'fighting':
            return ({ background: 'linear-gradient(#96402A,#F1613C,#CB735D)' });
            break;

        case 'poison':
            return ({ background: 'linear-gradient(#5B3184,#A564E3,#CE9BFF)' });
            break;

        case 'ghost':
            return ({ background: 'linear-gradient(#323569,#454AA8,#787DDA)' });
            break;

        case 'rock':
            return ({ background: 'linear-gradient(#7E7E7E,#8D8D94,#D3D3D3)' });
            break;

        case 'dark':
            return ({ background: 'linear-gradient(#030706,#0D1211,#5A5E5D)' });
            break;

        case 'ice':
            return ({ background: 'linear-gradient(#6FBEDF,#64CBF5,#BDEBFE)' });
            break;

        case 'steel':
            return ({ background: 'linear-gradient(#5E736C,#728881,#A8A8A8)' });
            break;

        case 'dragon':
            return ({ background: 'linear-gradient(#478A93,#56A4AE,#A2BEC1)' });
            break;

        case 'psychic':
            return ({ background: 'linear-gradient(#971B45,#C23867,#CD7D98)' });
            break;

        case 'flying':
            return ({ background: 'linear-gradient(#0C1395,#2B319B,#7075D9)' });
            break;

        case 'ground':
            return ({ background: 'linear-gradient(#654008,#895C1A,#D69638)' });
            break;

        case 'fairy':
            return ({ background: 'linear-gradient(#E090DE,#F2B1F3,#F4C1F3)' });
            break;

        case 'electric':
            return ({ background: 'linear-gradient(#E89301,#EDB930,#FFDD86)' });
            break;

        case 'shadow':
            return ({ background: 'linear-gradient(#5E4C9A,#7B15E3,#63664D)' });
            break;

        case 'unknown':
            return ({ background: 'linear-gradient(#71A494,#77745C,#6B7E7F)' });
            break;

        default:
            return ({ background: '#E5E5E5' });
    }
};

export default getGradientBackground;