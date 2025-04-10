import prisma from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
  const input = await req.json();

   const out=await prisma.product.create({
    data: {
      name: input.name,
      description: input.description,
      price: input.price,
    },
  });
  return new Response(JSON.stringify(out), {
    status: 200 // OK
  });
}