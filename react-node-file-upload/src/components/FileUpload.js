import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (data) => {
            //Set the progress value to show the progress bar
            setProgress(Math.round((100 * data.loaded) / data.total));
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <h3 className="m-5">Single File Upload</h3>
          <div className="form-group">
            <input onChange={handleFileChange} type="file" />
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>

          <div className="form-group">
            <div className="w-50 mt-2 container">
              {progress && (
                <ProgressBar now={progress} label={`${progress}%`} />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
