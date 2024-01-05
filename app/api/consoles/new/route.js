import { connectToDB } from "@/utils/database";
import Console from "@/models/console";

export const POST = async (req, res) => {
  const { company, console, stock, description } = await req.json();
  
  try {
    await connectToDB();
    const newConsole = new Console({
        company,
        console,
        stock,
        description
      });
    
    await newConsole.save();
    
    return new Response(JSON.stringify(newConsole), { status: 201 });
  } catch (err) {
    return new Response('Failed to create a new console', { status: 500 });
  }
}