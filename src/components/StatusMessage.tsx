import React from "react";

interface Props {
  loading: boolean;
  result: string | null;
  error: string;
}

const StatusMessage: React.FC<Props> = ({ loading, result, error }) => {
  return (
    <>
      {loading ? (
        <p className="mt-4 text-blue-500 text-sm sm:text-base lg:text-lg">
          Comparing files, please wait...
        </p>
      ) : (
        <>
          {result && (
            <p className="mt-4 text-green-500 text-sm sm:text-base lg:text-lg">
              {result}
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-500 text-sm sm:text-base lg:text-lg">
              {error}
            </p>
          )}
        </>
      )}
    </>
  );
};

export default StatusMessage;
