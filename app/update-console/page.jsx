'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const EditConsole = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // lets you read the current URL's query string
  const consoleId = searchParams.get('id');

  const [consoleData, setConsoleData] = useState({
    company: '',
    console: '',
    description: '',
    stock: 1
  });

  useEffect(() => {
    const getConsoleDetails = async () => {
      const res = await fetch(`/api/consoles/${consoleId}`);
      const data = await res.json();

      setConsoleData({
        company: data.company,
        description: data.description,
        console: data.console,
        stock: data.stock
      });
    }

    if (consoleId) getConsoleDetails();
  }, [consoleId])

  const updateConsole = async (e) => {
    e.preventDefault();

    if (!consoleId) return alert('Console ID not found');

    // Update game
    try {
      const res = await fetch(`/api/consoles/${consoleId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          company: consoleData.company,
          description: consoleData.description,
          console: consoleData.console,
          stock: consoleData.stock
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
      <h1 className='text-center font-bold text-3xl pt-5 mb-7 text-gray-300'><span className='text-pink-800'>Edit console</span> for the store</h1>
      <form
        onSubmit={updateConsole}
        className='w-1/2 m-auto'
      >
        <label className='create-game--label'>
          <span className='create-game--span'>Company: </span>
          <input
            type="text"
            value={consoleData.company}
            onChange={(e) => {
              setConsoleData({...consoleData, company: e.target.value})
            }}
            placeholder='Type console company...'
            className='create-game--input'
          />
        </label>
        <label className='create-game--label'>
          <span className='create-game--span'>Console: </span>
          <input
            type="text"
            value={consoleData.console}
            onChange={(e) => {
              setConsoleData({...consoleData, console: e.target.value})
            }}
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
            placeholder='Enter console stock...'
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

export default EditConsole