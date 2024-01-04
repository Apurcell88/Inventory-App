"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CreateGame = () => {
  const router = useRouter();

  const [game, setGame] = useState({
    title: '',
    description: '',
    genre: '',
    platform: '',
    stock: 1
  })

  const createGame = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/games/new', {
        method: 'POST',
        body: JSON.stringify({
          title: game.title,
          description: game.description,
          genre: game.genre,
          stock: game.stock
        })
      })

      if (res.ok) {
        router.push('/products');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className='px-3 bg-gray-900 h-screen'>
      <h1 className='text-center font-bold text-3xl pt-5 mb-7 text-gray-300'>Create a <span className='text-pink-800'>new game</span> for the store</h1>
      <form
        onSubmit={createGame}
        className='w-1/2 m-auto'
      >
        <label className='block mb-5'>
          <span className='text-gray-300 text-lg'>Game Title: </span>
          <input
            type="text"
            value={game.title}
            onChange={(e) => {
              setGame({...game, title: e.target.value})
            }}
            required
            placeholder='Type game title...'
            className='mt-3 pl-1 text-pink-800'
          />
        </label>
        <label className=''>
          <span>Game Description: </span>
          <textarea
            type="text"
            value={game.description}
            onChange={(e) => {
              setGame({...game, description: e.target.value})
            }}
            required
            placeholder='Type game description...'
          />
        </label>
        <label className=''>
          <span>Game Genre: </span>
          <input
            type="text"
            value={game.genre}
            onChange={(e) => {
              setGame({...game, genre: e.target.value})
            }}
            required
            placeholder='Type game genre...'
          />
        </label>
        <label className=''>
          <span>Game Platform: </span>
          <input
            type="text"
            value={game.platform}
            onChange={(e) => {
              setGame({...game, platform: e.target.value})
            }}
            required
            placeholder='Type game platform...'
          />
        </label>
        <label className=''>
          <span>Game Stock: </span>
          <input
            type="number"
            value={game.stock}
            onChange={(e) => {
              setGame({...game, stock: e.target.value})
            }}
            required
            placeholder='Enter game stock...'
          />
        </label>

        <article>
          <Link href='/products'>Cancel</Link>
          <button type="submit">Create</button>
        </article>
      </form>
    </section>
  );
}
 
export default CreateGame;