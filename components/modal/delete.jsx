"use client";
import { useState } from "react";
import { Button, Modal } from "antd";
export default function ModalDelete({ handleDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" size="small" danger onClick={showModal}>
        delete
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}
