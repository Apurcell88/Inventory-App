"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GameCard from '@/components/GameCard';
import ConsoleCard from '@/components/ConsoleCard';
import { GET } from '../api/games/route';

const Products = () => {
  // STATE
  const [games, setGames] = useState([]);
  const [consoles, setConsoles] = useState([]);

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

  const handleDeleteGame = async (game) => {
    const password = prompt('Please enter password to delete.')
    
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      try {
        await fetch(`/api/games/${game._id}`, {
          method: 'DELETE'
        });

        const filteredPosts = games.filter((g) => g._id !== game._id);
        setGames(filteredPosts);
        GET(); // this is new
      } catch (err) {
        console.error(err);
      }
    }
  }

  const handleEditGame = (game) => {
    router.push(`/update-game?id=${game._id}`);
  }

  const handleDeleteConsole = async (console) => {
    const password = prompt('Please enter password to delete.')
    
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      try {
        await fetch(`/api/consoles/${console._id}`, {
          method: 'DELETE'
        });

        const filteredPosts = consoles.filter((c) => c._id !== console._id);
        setConsoles(filteredPosts);
      } catch (err) {
        console.error(err);
      }
    }
  }

  const handleEditConsole = (console) => {
    router.push(`/update-console?id=${console._id}`);
  }
  
  return (
    <section className='bg-gray-900 h-full'>
      <article className='flex justify-center gap-5 py-8 md:gap-7'>
        <button
          className='text-sm bg-purple-700 text-gray-200 rounded-lg w-30 px-2 h-8 md:w-32 md:h-16 text-xl'
          onClick={() => {
            router.push('/create-game')
          }}
        >
          Add Game
        </button>
        <button
          className='text-sm bg-purple-700 text-gray-200 rounded-lg w-30 px-2 h-8 md:w-32 md:h-16 md:text-xl'
          onClick={() => {
            router.push('/create-console')
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
          setGames={setGames}
          handleDelete={() => {
            handleDeleteGame(game);
          }}
          handleEdit={() => {
            handleEditGame(game)
          }}
        />
      ))}
      {consoles.map((console) => (
        <ConsoleCard
          key={console._id}
          company={console.company}
          console={console.console}
          stock={console.stock}
          desc={console.description}
          handleDelete={() => {
            handleDeleteConsole(console)
          }}
          handleEdit={() => {
            handleEditConsole(console)
          }}
        />
      ))}
    </section>
  );
}
 
export default Products;