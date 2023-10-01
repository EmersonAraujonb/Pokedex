import { atomPokemon } from "../../store/atoms";
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import { selectorGetPokemon } from "../../store/selectors";
import { useState } from "react";
import Card from "../../components/Card";

const HomePage = () => {
    const [searchPokemon, setSearchPokemon] = useState();
    const [pokemon, setPokemon] = useRecoilState(atomPokemon);
    const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
    console.log(getLoadablePokemon)
    return (
        <div>
            <input type="text" onChange={(event) => setSearchPokemon(event.target.value)}/>
            <button onClick={() => setPokemon(searchPokemon)}>Pesquisar</button>
            {pokemon}
            {getLoadablePokemon?.contents !== undefined && (

                <Card
                type={getLoadablePokemon?.contents?.types?.[0]?.type?.name}
                id={getLoadablePokemon?.contents?.id}
                preview={getLoadablePokemon?.contents?.sprites?.versions?.['generation-v']?.['black-white'].animated?.front_default}
                image={getLoadablePokemon?.contents?.sprites?.other?.dream_world?.front_default ? getLoadablePokemon?.contents?.sprites?.other?.dream_world?.front_default : getLoadablePokemon?.contents?.sprites?.other?.['official-artwork']?.front_default }
                name={getLoadablePokemon?.contents?.name}
                />
            )}
        </div>
    );           
}

export default HomePage;