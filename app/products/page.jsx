"use client"

import { useEffect, useState } from 'react';

const Products = () => {
  // STATE
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch('/api/listAll');
      const data = await res.json();

      setGames(data);
    }

    fetchGames();
  }, [])
  
  return (
    <section>Products</section>
  );
}
 
export default Products;