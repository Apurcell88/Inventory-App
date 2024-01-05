import { connectToDB } from "@/utils/database";
import Game from "@/models/game";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Game.findByIdAndDelete(params.id);

    return new Response('Game has been deleted', { status: 200 });
  } catch (err) {
    return new Response('Something went wrong', { status: 500 });
  }
}