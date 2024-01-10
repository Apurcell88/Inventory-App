'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const EditGame = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // lets you read the current URL's query string
  const gameId = searchParams.get('id');

  const [game, setGame] = useState({
    title: '',
    description: '',
    genre: '',
    platform: '',
    stock: 1
  });

  useEffect(() => {
    const getGameDetails = async () => {
      const res = await fetch(`/api/games/${gameId}`);
      const data = await res.json();

      setGame({
        title: data.title,
        description: data.description,
        genre: data.genre,
        platform: data.platform,
        stock: data.stock
      });
    }

    if (gameId) getGameDetails();
  }, [gameId])

  const updateGame = async (e) => {
    e.preventDefault();

    if (!gameId) return alert('Game ID not found');

    // Update game
    try {
      const res = await fetch(`/api/games/${gameId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: game.title,
          description: game.description,
          genre: game.genre,
          platform: game.platform,
          stock: game.stock
        })
      });

      if (res.ok) {
        router.push('/products');
      }
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <section className='px-3 bg-gray-900 h-screen'>
      <h1 className='text-center font-bold text-3xl pt-5 mb-7 text-gray-300'><span className='text-pink-800'>Edit game</span> for the store</h1>
      <form
        onSubmit={updateGame}
        className='w-1/2 m-auto'
      >
        <label className='create-game--label'>
          <span className='create-game--span'>Game Title: </span>
          <input
            type="text"
            value={game.title}
            onChange={(e) => {
              setGame({...game, title: e.target.value})
            }}
            placeholder='Type game title...'
            className='create-game--input'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Game Description: </span>
          <textarea
            type="text"
            value={game.description}
            onChange={(e) => {
              setGame({...game, description: e.target.value})
            }}
            placeholder='Type game description...'
            className='create-game--input create-game--textarea'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Game Genre: </span>
          <input
            type="text"
            value={game.genre}
            onChange={(e) => {
              setGame({...game, genre: e.target.value})
            }}
            placeholder='Type game genre...'
            className='create-game--input'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Game Platform: </span>
          <input
            type="text"
            value={game.platform}
            onChange={(e) => {
              setGame({...game, platform: e.target.value})
            }}
            placeholder='Type game platform...'
            className='create-game--input'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Game Stock: </span>
          <input
            type="number"
            value={game.stock}
            onChange={(e) => {
              setGame({...game, stock: e.target.value})
            }}
            placeholder='Enter game stock...'
            className='create-game--input'
          />
        </label>

        <article className='flex justify-center gap-8 absolute'>
          <Link
             href='/products'
          >
            <button className='create-game--btn'>
              Cancel
            </button>
          </Link>
          <button 
            type="submit"
            className='create-game--btn'
          >
            Edit
          </button>
        </article>
      </form>
    </section>
  );
}

export default EditGame