"use client";
import { useSearchParams } from "next/navigation";
export default function getParams() {
  const params = useSearchParams();
  return params
}
