import React from "react";
import FileUpload from "./FileUpload";

interface Props {
  onSubmit: (file1: File, file2: File) => void;
}

const FileUploadWrapper: React.FC<Props> = ({ onSubmit }) => {
  return <FileUpload onSubmit={onSubmit} />;
};

export default FileUploadWrapper;
