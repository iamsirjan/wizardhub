import { useState, ChangeEvent, FormEvent } from "react";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [tableName, setTableName] = useState<string>("");
  const [tableData, setTableData] = useState<{
    columns: string[];
    data: string[][];
  } | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("table_name", tableName);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/api/tables/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Data sent successfully");
        const responseData = await response.json();
        setTableData(responseData.response);
        setTableName("a");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
      </form>

      {tableData && (
        <table>
          <thead>
            <tr>
              {tableData.columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FileUpload;
