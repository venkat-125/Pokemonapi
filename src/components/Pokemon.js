import React from 'react';
import "./style.css";

const pokemon = ({ pokemon }) => {

    return (
        <>
            <div className='main' style={{ border: 'none' }}>
                <a href={`/pokemon/${pokemon.id}`}> 
                    <img style={{ width: '20rem' }} src={pokemon.sprites.front_default} variant='top'/>
                </a>
                <div className={`${pokemon.types[0].type.name} rounded text-white`}>
                    <a href={`/pokemon/${pokemon.name}`} className='link-name'>
                        <div><strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default pokemon;

