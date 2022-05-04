import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

const formats = ["bold", "italic", "underline", "strike", "image", "list"];

const modules = {
  toolbar: [
    ["bold", "italic", "strike"],
    [],
    [{ list: "ordered" }, { list: "bulle" }],
    [],
    ["image"],
  ],
};

const TextEditor = () => {
  return (
    <ReactQuill
      theme="snow"
      formats={formats}
      modules={modules}
      className="note-text"
      placeholder="Add your notes here..."
    />
  );
};

export { TextEditor };
