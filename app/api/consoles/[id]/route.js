import { connectToDB } from "@/utils/database";
import Console from "@/models/console";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Console.findByIdAndDelete(params.id)


    return new Response('Console has been deleted', { status: 200 });
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
}