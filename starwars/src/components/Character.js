// Write your Character component here
import React from "react";

export default function Character({pokemon}){
    if(pokemon){
        return (
            <div>{pokemon.name}</div>
        )
    }
    return null;
}