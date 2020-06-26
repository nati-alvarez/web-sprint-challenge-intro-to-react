import React, {useState, useEffect} from 'react';
import axios from "axios";
import styledComponent from "styled-components";
import './App.css';

import Character from "./components/Character";

const API = "https://pokeapi.co/api/v2/pokemon/";

const Title = styledComponent.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  -webkit-text-stroke 2px black;
  text-stroke: 2px black;
`;

const Characters = styledComponent.main`
  display: flex;
  flex-wrap: wrap;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [pokemon, setPokemon] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get(API).then(({data})=>{
      data.results.forEach(item=>{
        axios.get(item.url).then(({data})=>{
          setPokemon(pokemon=> [...pokemon, data])
        }).catch(err=>{
          console.log(err);
        });
      })
    }).catch(err=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <Title>Pokemon Characters</Title>
      <Characters>
        {pokemon[0] && pokemon.map(pokemon=>{
          return <Character pokemon={pokemon}/>
        })}
      </Characters>
    </div>
  );
}

export default App;
