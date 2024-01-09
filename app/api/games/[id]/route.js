import { connectToDB } from "@/utils/database";
import Game from "@/models/game";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // filter out prompts
    const game = await Game.findById(params.id)

    if (!game) return new Response('Game not found', { status: 404 });

    return new Response(JSON.stringify(game), {
      status: 200
    })
  } catch (err) {
    return new Response('Failed to fetch all games', {
      status: 500
    })
  }
}

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Game.findByIdAndDelete(params.id)


    return new Response('Game has been deleted', { status: 200 });
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
}

export const PATCH = async (req, { params }) => {
  // get data passed for update
  const { title, description, genre, platform, stock } = await req.json();

  try {
    await connectToDB();

    // find the existing game
    const existingGame = await Game.findById(params.id);

    if (!existingGame) return new Response('Game not found', { status: 404 })

    existingGame.title = title;
    existingGame.description = description;
    existingGame.genre = genre;
    existingGame.platform = platform;
    existingGame.stock = stock;

    await existingGame.save();

    return new Response(JSON.stringify(existingGame), { status: 200 });
  } catch (err) {
    return new Response('Failed to update game', { status: 404 });
  }
}