// Write your Character component here
import React from "react";
import styledComponent from 'styled-components';

const Pokemon = styledComponent.div`
    width: 30%;
    background: whitesmoke;
    border-radius: 5px;
    margin-bottom: 2vh;
    display: flex;
    align-items: center;
`;

const Name = styledComponent.h3`
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-size: 1.4rem;
`;

export default function Character({pokemon}){
    if(pokemon){
        console.log(pokemon)
        return (
            <Pokemon>
                <img src={pokemon.sprites.front_default}/>
                <div>
                    <Name>{pokemon.name}</Name>
                    <p><strong>Types:</strong> {pokemon.types.map(type=> type.type.name + " ")}</p>
                    <p><strong>Abilities:</strong> {pokemon.abilities.map(ability=> ability.ability.name + " ")}</p>
                    <p><strong>Height:</strong> {pokemon.height}</p>
                    <p><strong>Weight:</strong> {pokemon.weight}</p>
                </div>
            </Pokemon>
        )
    }
    return null;
}