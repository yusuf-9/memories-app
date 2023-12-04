import Prisma from "@/lib/prisma-client";

export async function POST(request: Request) {
    console.log('API hit')
    const data = await request.json()
  try {
    const users = await Prisma.user.findMany()
    return Response.json({ users, body: data});
  } catch (err) {
    console.log({ err });
  }
}
