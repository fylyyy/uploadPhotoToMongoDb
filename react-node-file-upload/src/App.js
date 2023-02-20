import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./components/FileUpload";
import { useEffect, useState } from "react";
import axios from "axios";
import FileList from "./components/FileList";

function App() {
  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/files");
        const urlData = await response.data.map(obj => obj.url)
        setFileUrls([...urlData])
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h2 className="ms-2">React File Upload Demo</h2>
      </header>
      <FileUpload />
      <FileList fileUrls={fileUrls} />
    </div>
  );
}

export default App;
