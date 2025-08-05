import { NextResponse } from "next/server";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const perPage = searchParams.get("perPage");

  const data = await fetch(
    `https://api.projectme.my.id/apiproduct?page=${page}&perPage=${perPage}`
  );
  const res = await data.json();
  return NextResponse.json(res);
}
