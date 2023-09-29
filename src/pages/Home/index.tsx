import { atomPokemon } from "../../store/atoms";
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import { selectorGetPokemon } from "../../store/selectors";
import { useState } from "react";

const HomePage = () => {
    const [searchPokemon, setSearchPokemon] = useState('');
    const [pokemon, setPokemon] = useRecoilState(atomPokemon);
    const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
    console.log(getLoadablePokemon)
    return (
        <div>
            <input type="text" onChange={(event) => setSearchPokemon(event.target.value)}/>
            <button onClick={() => setPokemon(searchPokemon)}>Pesquisar</button>
            {pokemon}
        </div>
    );           
}

export default HomePage;