import { useSearchParams } from "next/navigation";
import { connectToDB } from "@/utils/database";
import Console from "@/models/console";
// import { json } from "express/lib/response";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // filter out consoles
    const console = await Console.findById(params.id)

    if (!console) return new Response('Console not found', { status: 404 });

    return new Response(JSON.stringify(console), {
      status: 200
    })
  } catch (err) {
    return new Response('Failed to fetch all consoles', {
      status: 500
    })
  }
}

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Console.findByIdAndDelete(params.id)

    return new Response('Console has been deleted', { status: 200 });
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
}

export const PATCH = async (req, { params }) => {
  const { company, console, description, stock } = await req.json();

  try {
    await connectToDB();
    const existingConsole = await Console.findById(params.id);

    if (!existingConsole) return new Response('Console not found', { status: 404 });

    existingConsole.company = company;
    existingConsole.console = console;
    existingConsole.description = description;
    existingConsole.stock = stock;

    await existingConsole.save();

    return new Response(JSON.stringify(existingConsole), { status: 200 });
  } catch (err) {
    return new Response('Failed to update console', { status: 404 });
  }
  
}