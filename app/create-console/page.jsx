"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CreateConsole = () => {
  const router = useRouter();

  const [consoleData, setConsoleData] = useState({
    company: '',
    console: '',
    description: '',
    stock: 1
  })

  const createConsole = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/consoles/new', {
        method: 'POST',
        body: JSON.stringify({
          company: consoleData.company,
          console: consoleData.console,
          description: consoleData.description,
          stock: consoleData.stock
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
      <h1 className='text-center font-bold text-3xl pt-5 mb-7 text-gray-300'>Create a <span className='text-pink-800'>new console</span> for the store</h1>
      <form
        onSubmit={createConsole}
        className='w-1/2 m-auto'
      >
        <label className='create-game--label'>
          <span className='create-game--span'>Console Company: </span>
          <input
            type="text"
            value={consoleData.company}
            onChange={(e) => {
              setConsoleData({...consoleData, company: e.target.value})
            }}
            required
            placeholder='Type console company...'
            className='create-game--input'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Console Name: </span>
          <input
            type="text"
            value={consoleData.console}
            onChange={(e) => {
              setConsoleData({...consoleData, console: e.target.value})
            }}
            required
            placeholder='Type console name...'
            className='create-game--input'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Console Description: </span>
          <textarea
            type="text"
            value={consoleData.description}
            onChange={(e) => {
              setConsoleData({...consoleData, description: e.target.value})
            }}
            required
            placeholder='Type console description...'
            className='create-game--input create-game--textarea'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Console Stock: </span>
          <input
            type="number"
            value={consoleData.stock}
            onChange={(e) => {
              setConsoleData({...consoleData, stock: e.target.value})
            }}
            required
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
            Create
          </button>
        </article>
      </form>
    </section>
  );
}
 
export default CreateConsole