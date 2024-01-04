const GameCard = ({
  title,
  desc,
  genre,
  platform,
  stock
}) => {
  return (
    <section className="text-center px-2 py-8 border-b-8 border-gray-600">
      <h2 className="text-2xl text-pink-700">{title}</h2>
      <p className="game-card--info">{desc}</p>
      <p className="game-card--info">Genre: {genre}</p>
      <p className="game-card--info">Platform: {platform}</p>
      <p className="game-card--info">Stock: {stock}</p>
      <article>
        <button>Edit</button>
        <button>Delete</button>
      </article>
    </section>
  );
}
 
export default GameCard;