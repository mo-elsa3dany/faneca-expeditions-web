import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, quizAnswers, matchedTrips } = body;

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        email,
        name,
        quizJson: JSON.stringify({ quizAnswers, matchedTrips }),
      },
    });

    return Response.json({ success: true, lead });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
