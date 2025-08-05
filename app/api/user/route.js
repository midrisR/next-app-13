import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const secret = process.env.AUTH_SECRET;

export async function GET(req) {
  const token = await getToken({ req, secret });
  return NextResponse.json(token);
}
