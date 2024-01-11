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
          stock: game.stock,
          platform: game.platform
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
        className='w-1/2 m-auto md:w-1/3 pt-3'
      >
        <label className='create-game--label'>
          <span className='create-game--span'>Game Title: </span>
          <input
            type="text"
            value={game.title}
            onChange={(e) => {
              setGame({...game, title: e.target.value})
            }}
            required
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
            required
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
            required
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
            required
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
            required
            placeholder='Enter game stock...'
            className='create-game--input'
          />
        </label>

        <article className='flex justify-center gap-8 absolute md:pl-7'>
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
            Create
          </button>
        </article>
      </form>
    </section>
  );
}
 
export default CreateGame;