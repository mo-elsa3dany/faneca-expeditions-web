import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (!process.env.ADMIN_PASSWORD) {
    return Response.json(
      { error: "ADMIN_PASSWORD not configured" },
      { status: 500 }
    );
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  cookies().set("admin", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 6, // 6 hours
    sameSite: "lax",
  });

  return Response.json({ success: true });
}
