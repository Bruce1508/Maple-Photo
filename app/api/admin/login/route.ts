import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual, createHash } from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const submitted: string = typeof body.password === "string" ? body.password : "";

  const adminPassword = process.env.ADMIN_PASSWORD ?? "";

  if (!adminPassword) {
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  // Use timingSafeEqual to prevent timing attacks
  const submittedBuf = createHash("sha256").update(submitted).digest();
  const passwordBuf = createHash("sha256").update(adminPassword).digest();
  const valid = timingSafeEqual(submittedBuf, passwordBuf);

  if (!valid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin-auth", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    // secure: true, // Uncomment in production (HTTPS only)
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}
