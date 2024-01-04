import { connectToDB } from "@/utils/database";
import Console from '/models/console';

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const consoles = await Console.find({});

    return new Response(JSON.stringify(consoles), {
      status: 200
    })
  } catch (err) {
    return new Response('Failed to fetch all consoles', {
      status: 500
    })
  }
}