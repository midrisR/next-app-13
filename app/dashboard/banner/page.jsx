"use client";

import React, { useState } from "react";
import { Button, Modal, Upload } from "antd";
import ImgCrop from "antd-img-crop";
export default function Banner() {
  const [ModalOPen, setModalOPen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const showModal = () => {
    setModalOPen(true);
  };

  const handleOk = () => {
    setModalOPen(false);
  };
  const handleCancel = () => {
    setModalOPen(false);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={ModalOPen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ImgCrop rotationSlider modalProps="destroyOnHidden">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </Modal>
    </>
  );
}
