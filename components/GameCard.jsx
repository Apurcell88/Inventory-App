// import Link from 'next/link';

const GameCard = ({
  title,
  desc,
  genre,
  platform,
  stock,
  handleDelete,
  handleEdit
}) => {
  return (
    <section className="text-center px-2 py-8 border-b-8 border-gray-600">
      <h2 className="text-3xl text-pink-700 font-semibold">{title}</h2>
      <p className="card-info">{desc}</p>
      <p className="card-info">Genre: {genre}</p>
      <p className="card-info">Platform: {platform}</p>
      <p className="card-info">Stock: {stock}</p>
      <article className="flex justify-center gap-5">
        
        <button
          className="game-card--btn"
          onClick={handleEdit}
        >
          Edit
        </button>
        
        <button
          className="game-card--btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </article>
    </section>
  );
}
 
export default GameCard;