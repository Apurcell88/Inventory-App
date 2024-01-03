import { connectToDB } from "@/utils/database";
import Game from '/models/game';

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const games = await Game.find({});
    console.log(games)

    return new Response(JSON.stringify(games), {
      status: 200
    })
  } catch (err) {
    return new Response('Failed to fetch all games', {
      status: 500
    })
  }
}