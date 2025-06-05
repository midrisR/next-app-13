// "use client";

// import { useState, useCallback } from "react";
// import { Button, Modal, Upload } from "antd";
// // import ImgCrop from "antd-img-crop";
// import getCroppedImg from "@/components/image/cropImage";
// import { PlusOutlined } from "@ant-design/icons";
// import Cropper from "react-easy-crop";
// export default function Banner() {
//   const [ModalOPen, setModalOPen] = useState(false);
//   const [fileList, setFileList] = useState([]);
//   const [cropModalVisible, setCropModalVisible] = useState(false);
//   const [imageToCrop, setImageToCrop] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const showModal = () => {
//     setModalOPen(true);
//   };

//   const handleOk = () => {
//     setModalOPen(false);
//   };
//   const handleCancel = () => {
//     setModalOPen(false);
//   };
//   const beforeUpload = (file) => {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//       setImageToCrop(reader.result);
//       setCropModalVisible(true);
//     });
//     reader.readAsDataURL(file);
//     return false; // prevent automatic upload
//   };

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const handleCrop = async () => {
//     const croppedImage = await getCroppedImg(imageToCrop, croppedAreaPixels);
//     setFileList([
//       ...fileList,
//       {
//         url: croppedImage,
//       },
//     ]);
//     setCropModalVisible(false);
//     setImageToCrop(null);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal
//         title="Basic Modal"
//         closable={{ "aria-label": "Custom Close Button" }}
//         open={ModalOPen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <Upload
//           listType="picture-card"
//           fileList={fileList}
//           beforeUpload={beforeUpload}
//           onPreview={(file) => {
//             window.open(file.url, "_blank");
//           }}
//           onRemove={(file) => {
//             setFileList(fileList.filter((f) => f.uid !== file.uid));
//           }}
//         >
//           {fileList.length >= 8 ? null : (
//             <div>
//               <PlusOutlined />
//               <div style={{ marginTop: 8 }}>Upload</div>
//             </div>
//           )}
//         </Upload>

//         <Modal
//           open={cropModalVisible}
//           onCancel={() => setCropModalVisible(false)}
//           onOk={handleCrop}
//           okText="Crop & Save"
//           width={400}
//         >
//           {imageToCrop && (
//             <div style={{ position: "relative", height: 300, width: "100%" }}>
//               <Cropper
//                 image={imageToCrop}
//                 crop={crop}
//                 zoom={zoom}
//                 aspect={1}
//                 onCropChange={setCrop}
//                 onZoomChange={setZoom}
//                 onCropComplete={onCropComplete}
//               />
//             </div>
//           )}
//         </Modal>
//       </Modal>
//     </>
//   );
// }

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
        <ImgCrop rotationSlider>
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
