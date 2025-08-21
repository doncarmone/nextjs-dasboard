import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = () => {
//     if (typeof localStorage === 'undefined') return {};

//     const savedFavorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//     return savedFavorites as PokemonsState;
// };

const initialState: PokemonsState = {
    // ...getInitialState()
    favorites: {},
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
            state.favorites = action.payload;
        },
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
                // return;
            } {
                state.favorites[id] = pokemon;
            }
            // TODO No se deberia hacer
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer