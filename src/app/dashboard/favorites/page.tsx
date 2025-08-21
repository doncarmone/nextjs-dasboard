import { FavoritePokemons } from '../../../pokemons/components/FavoritePokemons';

export const metadata = {
  title: 'Pokemons Favoritos',
  description: 'Pokemons Favoritos',
};

export default async function FavoritePokemonsPage() {
  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        Listado de Pokemones favoritos{' '}
        <small className='text-blue-500'>favoritos</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}
