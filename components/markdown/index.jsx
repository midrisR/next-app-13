"use client";
import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";
import RenderMd from "./Md";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

function Markdown({ value, handleEditorChange, name }) {
  return (
    <div>
      <MdEditor
        config={{
          view: {
            menu: true,
            md: true,
            html: false,
            fullScreen: false,
            hideMenu: true,
          },
          table: {
            maxRow: 5,
            maxCol: 6,
          },
          syncScrollMode: ["leftFollowRight", "rightFollowLeft"],
        }}
        imageAccept=".jpg,.png"
        className="w-full border border-red-800"
        name={name}
        value={value}
        style={{ height: "500px" }}
        renderHTML={(text) => <RenderMd markdown={text} />}
        onChange={handleEditorChange}
      />
      {/* <HandleError error={mdError} field="content" /> */}
    </div>
  );
}
export default Markdown;
