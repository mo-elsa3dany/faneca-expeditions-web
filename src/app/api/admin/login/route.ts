import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD not configured" },
      { status: 500 }
    );
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const cookieStore = await cookies();

  cookieStore.set("admin", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 6, // 6 hours
    sameSite: "lax",
  });

  return NextResponse.json({ success: true });
}
