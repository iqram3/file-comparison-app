import React, { useState } from "react";
import FileUploadWrapper from "./FileUploadWrapper";
import StatusMessage from "./StatusMessage";

const APIURL = "http://localhost:4000";

const FileContainer: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (file1: File, file2: File) => {
    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(`${APIURL}/compare`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to compare files. Please try again.");
      }

      const data = await response.json();
      setResult(data.difference);
    } catch (err: any) {
      setError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white p-4 rounded-lg shadow-lg">
        <FileUploadWrapper onSubmit={handleSubmit} />
        <StatusMessage loading={loading} result={result} error={error} />
      </div>
    </div>
  );
};

export default FileContainer;
