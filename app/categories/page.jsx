'use client'

import { useEffect, useState } from 'react';
import GameCard from '@/components/GameCard';
import ConsoleCard from '@/components/ConsoleCard';

const Categories = () => {
  // STATE
  const [games, setGames] = useState([]);
  const [consoleData, setConsoleData] = useState([]);
  const [gamesDisplay, setGamesDisplay] = useState(false);
  const [consolesDisplay, setConsolesDisplay] = useState(false)

  // make call to API endpoint to GET games/consoles depending which button is clicked
  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch('/api/games');
      const data = await res.json();

      setGames(data);
    }

    fetchGames();
  }, [gamesDisplay]);

  useEffect(() => {
    const fetchConsoles = async () => {
      const res = await fetch('/api/consoles');
      const data = await res.json();

      setConsoleData(data);
    }

    fetchConsoles();
  }, [consolesDisplay]);

  const toggleGamesDisplay = () => {
    setGamesDisplay(!gamesDisplay)
    setConsolesDisplay(false);
  }

  const toggleConsolesDisplay = () => {
    setConsolesDisplay(!consolesDisplay)
    setGamesDisplay(false);
  }

  return (
    <section className="bg-gray-900 h-full">
      <h1 className="text-gray-300 text-center text-2xl pt-5 md:text-4xl pt-7">Search By Category</h1>
      <article className="flex justify-center gap-9 pt-10">
        <button
          className="categories--btn"
          onClick={toggleGamesDisplay}
        >
          Games
        </button>
        <button
          className="categories--btn"
          onClick={toggleConsolesDisplay}
        >
            Consoles
        </button>
      </article>
      <article className={gamesDisplay ? 'md:bg-gray-900 h-full' : ''} >
        {gamesDisplay ?
          games.map((game) => (
            <GameCard
              key={game._id}
              title={game.title}
              desc={game.description}
              genre={game.genre}
              platform={game.platform}
              stock={game.stock}
            />
           
          )): ''
        }
      </article>
      <article>
        {consolesDisplay ?
          consoleData.map((console) => (
            <ConsoleCard
              key={console._id}
              company={console.company}
              desc={console.description}
              console={console.console}
              stock={console.stock}
            />
          )) : ''
        }
      </article>
    </section>
  );
}
 
export default Categories;