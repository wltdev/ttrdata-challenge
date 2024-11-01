import logo from "./assets/ttrdatalogo.svg";
import "./App.css";
import { FileInput } from "./components/FileInput";
import { useFilesUploader } from "./hooks/filesUploader";
import { Button } from "./components/Button";
import { TableData } from "./components/TableData";

const data = {
  header: [],
  items: [],
};

function App() {
  const {
    tableHeader,
    identicalData,
    updatedData,
    newData,
    error,
    isLoading,
    handleFileChange,
    handleSendFiles,
  } = useFilesUploader();

  return (
    <div className="container">
      <a href="https://react.dev" target="_blank">
        <img src={logo} className="logo react" alt="React logo" />
      </a>

      <h1>Comparator app</h1>

      <div className="files-content">
        <FileInput
          label="Upload old file"
          onChange={(file) => handleFileChange(file, true)}
        />

        <FileInput
          label="Upload new file"
          onChange={(file) => handleFileChange(file, false)}
        />

        {error && <p>{error}</p>}

        <div className="buttons">
          <Button
            title="Send files"
            loading={isLoading}
            onClick={handleSendFiles}
          />
        </div>
      </div>

      <div className="item">
        <h2>Idendical values</h2>
        <TableData data={identicalData} header={tableHeader} />
      </div>

      <div className="item">
        <h2>Updated values</h2>
        <TableData data={updatedData} header={tableHeader} />
      </div>

      <div className="item">
        <h2>New values</h2>
        <TableData data={newData} header={tableHeader} />
      </div>
    </div>
  );
}

export default App;
