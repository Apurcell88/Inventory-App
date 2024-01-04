"use client"

import { useEffect, useState } from 'react';
import GameCard from '@/components/GameCard';

const Products = () => {
  // STATE
  const [games, setGames] = useState([]);
  const [consoles, setConsoles] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch('/api/listAll');
      const data = await res.json();

      setGames(data);
    }

    fetchGames();
  }, [games]);
  
  return (
    <section className='bg-gray-900 h-full'>
      <article className='flex justify-end pr-5 pt-5'>
        <button className='text-sm bg-purple-700 text-gray-200 rounded-lg w-30 px-2 h-8'>Add Product</button>
      </article>
      <article className='text-center py-7'>
        <h1 className='text-3xl font-bold text-gray-300 border-b border-purple-700 inline-block'>All Products</h1>
      </article>
      {games.map((game) => (
        <GameCard
          key={game._id}
          title={game.title}
          desc={game.description}
          genre={game.genre}
          stock={game.stock}
          platform={game.platform}
        />
      ))}
    </section>
  );
}
 
export default Products;