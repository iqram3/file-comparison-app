import React, { useState } from "react";

interface Props {
  onSubmit: (file1: File, file2: File) => void;
}

const allowedExtensions = ["txt", "json", "pdf"];

const FileUpload: React.FC<Props> = ({ onSubmit }) => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file1Error, setFile1Error] = useState<string>("");
  const [file2Error, setFile2Error] = useState<string>("");

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: (file: File | null) => void,
    setFileError: (error: string) => void
  ) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setFileError("");
      } else {
        setFileError(
          `Invalid file type. Allowed types: ${allowedExtensions.join(", ")}`
        );
        setFile(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file1 || !file2) {
      if (!file1) setFile1Error("Please select a valid File 1.");
      if (!file2) setFile2Error("Please select a valid File 2.");
    } else {
      onSubmit(file1, file2);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 border border-gray-300 rounded-md shadow-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <h2 className="text-lg font-semibold text-center mb-4 sm:text-xl lg:text-2xl">
        Compare Files
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="file1"
            className="block text-sm font-medium text-gray-700 sm:text-base lg:text-lg"
          >
            File 1
          </label>
          <input
            id="file1"
            type="file"
            onChange={(e) => handleFileChange(e, setFile1, setFile1Error)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 sm:text-sm lg:text-base"
          />
          {file1Error && (
            <p className="text-red-500 text-sm sm:text-base">{file1Error}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="file2"
            className="block text-sm font-medium text-gray-700 sm:text-base lg:text-lg"
          >
            File 2
          </label>
          <input
            id="file2"
            type="file"
            onChange={(e) => handleFileChange(e, setFile2, setFile2Error)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 sm:text-sm lg:text-base"
          />
          {file2Error && (
            <p className="text-red-500 text-sm sm:text-base">{file2Error}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg"
        >
          Compare Files
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
