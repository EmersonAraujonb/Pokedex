import styled from "styled-components";
import { FlexBox } from "../Flexbox";
import { TPokemonType } from "../../interface";

interface TAtomPokemontype {
    type: TPokemonType;
}

export const Container = styled(FlexBox)`
    max-width: 220px;
    background-color: ${(props) => props?.theme?.colors?.neutral?.pure};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 0 10px;
    heigth: 100%;
    max-height: 340px;
    `;

export const PokemonSpot = styled(FlexBox)<TAtomPokemontype>`
    background-color: ${(props) => props?.theme?.colors?.types?.[props?.type]};
    border-radius: 100%;
    width: 160px;
    height: 160px;
`;

export const PokemonSprite = styled.img`
    height: 200px;
    width: 200px;
`;

export const Pokemontext = styled.span<TAtomPokemontype>`
  color:  ${(props) => props?.theme?.colors?.types?.[props?.type]};
  font-size: 1.25em;
  font-weight: bold;
`;