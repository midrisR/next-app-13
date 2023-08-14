"use client";
import { useSearchParams } from "next/navigation";
export default function getParams() {
  const params = useSearchParams();
  console.log(params);
}
