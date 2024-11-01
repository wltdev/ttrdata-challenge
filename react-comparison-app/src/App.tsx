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

      <h1>Line by line comparison</h1>

      <div className="files-content">
        <FileInput
          label="Old file"
          onChange={(file) => handleFileChange(file, true)}
        />

        <FileInput
          label="Updated file"
          onChange={(file) => handleFileChange(file, false)}
        />

        <div className="buttons">
          <Button
            title="Compare files"
            loadingText="Comparing files..."
            loading={isLoading}
            onClick={handleSendFiles}
          />
          {error && <span className="error">{error}</span>}
        </div>
      </div>

      <div className="item">
        <h2>Idendical Lines</h2>
        <TableData data={identicalData} header={tableHeader} />
      </div>

      <div className="item">
        <h2>Updated Lines</h2>
        <TableData data={updatedData} header={tableHeader} />
      </div>

      <div className="item">
        <h2>New Lines</h2>
        <TableData data={newData} header={tableHeader} newLines />
      </div>
    </div>
  );
}

export default App;
