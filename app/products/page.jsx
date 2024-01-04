"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GameCard from '@/components/GameCard';
import ConsoleCard from '@/components/ConsoleCard';

const Products = () => {
  // STATE
  const [games, setGames] = useState([]);
  const [consoles, setConsoles] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch('/api/games');
      const data = await res.json();

      setGames(data);
    }

    fetchGames();
  }, [games]);

  useEffect(() => {
    const fetchConsoles = async () => {
      const res = await fetch('/api/consoles')
      const data = await res.json();

      setConsoles(data);
    }

    fetchConsoles();
  }, [consoles]);
  
  return (
    <section className='bg-gray-900 h-full'>
      <article className='flex justify-center gap-5 py-8'>
        <button
          className='text-sm bg-purple-700 text-gray-200 rounded-lg w-30 px-2 h-8'
          onClick={() => {
            router.push('/create-game')
          }}
        >
          Add Game
        </button>
        <button
          className='text-sm bg-purple-700 text-gray-200 rounded-lg w-30 px-2 h-8'
          onClick={() => {
            router.push('/products/consoleForm')
          }}
        >
          Add Console
        </button>
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
          data={games}
        />
      ))}
      {consoles.map((console) => (
        <ConsoleCard
          key={console._id}
          company={console.company}
          console={console.console}
          stock={console.stock}
          desc={console.description}
        />
      ))}
    </section>
  );
}
 
export default Products;