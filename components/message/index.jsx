"use client";
import { useState } from "react";
import { MessageFilled } from "@ant-design/icons";
import { Button } from "antd";
import Create from "./form";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 z-50 right-0 mb-5 mx-10">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 w-96 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-lg font-semibold mb-2">
            Hubungi kami untuk mendapatkan informasi dan penawaran
          </h2>
          <Create setIsOpen={setIsOpen} />
        </div>
      )}
      <Button
        className="rounded-full w-14 h-14 bg-green-800 flex items-center justify-center shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageFilled className="text-white text-2xl" />
      </Button>
    </div>
  );
}
