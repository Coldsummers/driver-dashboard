import React from "react";

const FileUpload = ({ onFileChange }) => {
  const handleChange = (e) => {
    onFileChange(e.target.files[0]);
  };

  return (
    <input
      type="file"
      accept="image/*,application/pdf"
      onChange={handleChange}
      required
    />
  );
};

export default FileUpload;