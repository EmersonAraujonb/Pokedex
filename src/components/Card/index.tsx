import { FC } from "react";
import * as Atom from './atoms';
import { FlexBox } from "..";
import { IPokemonTypes } from "../../interface";

interface ICardProps {
    id: string;
    image: string;
    name: string;
    preview?: string;
    type?: IPokemonTypes;
}

const Card: FC<ICardProps> = ({ name, image, preview, id, type }) => {
    return (
        <Atom.Container
            gap="xs"
            align="center"
            justify="center"
            direction="column"
        >
            <FlexBox 
            align="center"
            justify="flex-end"
            direction="column"
            >
                <Atom.Pokemontext type={type}>
                    #{id}
                </Atom.Pokemontext>
            </FlexBox>
            <Atom.PokemonSpot
                align="center"
                justify="center"
                direction="column"
                type={type}
            >
                <Atom.PokemonSprite src={image} alt='' />
            </Atom.PokemonSpot >
            <FlexBox
                align="center"
                justify="space-between"
                direction="row"
            >
                <Atom.Pokemontext type={type}>
                    {name}
                </Atom.Pokemontext>
                {preview && (
                    <img src={preview} alt="" />
                ) }
            </FlexBox>
        </Atom.Container>
    )
}

export default Card;