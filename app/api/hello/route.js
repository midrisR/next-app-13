import { NextResponse } from "next/server";
export async function GET(request) {
  const products = await fetch("http://localhost:5000/api/product");
  const res = await products.json();
  return NextResponse.json(res);
}
