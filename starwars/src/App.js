import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

import Character from "./components/Character";

const API = "https://pokeapi.co/api/v2/pokemon/";

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
      {pokemon[0] && pokemon.map(pokemon=>{
        return <Character pokemon={pokemon}/>
      })}
      <Character/>
    </div>
  );
}

export default App;
