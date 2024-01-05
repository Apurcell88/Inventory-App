import { connectToDB } from "@/utils/database";
import Game from "@/models/game";

export const POST = async (req, res) => {
  const { title, description, genre, stock, platform } = await req.json();

  try {
    await connectToDB();
    const newGame = new Game({
      title,
      description,
      genre,
      stock,
      platform
    });

    // save to db
    await newGame.save();

    return new Response(JSON.stringify(newGame), { status: 201 }); // 201 means created
  } catch (err) {
    return new Response('Failed to create a new game', { status: 500 });
  }
}