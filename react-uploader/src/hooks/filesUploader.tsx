import axios from "axios";
import { useState } from "react";

const env = import.meta.env;
type Item = { old: string[]; new: string[] };

type Response = {
  header: string[];
  identical: Item[];
  updated: Item[];
  new: Item[];
};

export const useFilesUploader = () => {
  const [updatedFile, setUpdatedFile] = useState<File | null | undefined>(null);
  const [oldFile, setOldFile] = useState<File | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tableHeader, setTableHeader] = useState<string[]>([]);
  const [identicalData, setIdenticalData] = useState<Item[]>([] as Item[]);
  const [updatedData, setUpdatedData] = useState<Item[]>([] as Item[]);
  const [newData, setNewData] = useState<Item[]>([] as Item[]);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    oldFile = false
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      setError("Please select a file");
    }

    if (oldFile) {
      setOldFile(file);
    } else {
      setUpdatedFile(file);
    }

    setError(null);
  };

  const handleSendFiles = async () => {
    const formData = new FormData();

    if (!oldFile || !updatedFile) {
      setError("Please select both files");
      return;
    }

    formData.append("oldCsv", oldFile);
    formData.append("updatedCsv", updatedFile);

    setIsLoading(true);

    try {
      const { data }: { data: Response } = await axios.post(
        `${env.VITE_API_URL}/compare-csv-files`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTableHeader(data.header);
      setIdenticalData(data.identical);
      setUpdatedData(data.updated);
      setNewData(data.new);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updatedFile,
    oldFile,
    error,
    isLoading,
    tableHeader,
    identicalData,
    updatedData,
    newData,
    handleFileChange,
    handleSendFiles,
  };
};
