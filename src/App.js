import React, { useState } from "react";
import PropertyTable from "./PropertyTable";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [file, setFile] = useState(null);

  // Handle CSV upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Zillow Property Investment Analyzer</h1>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="form-control mb-3"
      />

      {file && <PropertyTable file={file} />}
    </div>
  );
};

export default App;
