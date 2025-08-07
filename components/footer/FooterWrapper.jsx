"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import ComFooter from "./index";
import ChatButton from "@/components/message";
export default function FooterWrapper({ employes }) {
  const segments = useSelectedLayoutSegments();

  if (segments.includes("dashboard")) return null;

  return (
    <>
      <ChatButton />
      <ComFooter employes={employes} />;
    </>
  );
}
