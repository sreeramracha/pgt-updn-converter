import { useState } from "react";
import Input from "./Input";
import "../styles/mapperfiles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Data from "./Data";
import Column from "./Column";

function App() {
	const [mapperFiles, setMapperFiles] = useState([]);
	const [archiveFile, setArchiveFile] = useState({
		fileName: "",
		fileContent: "",
		fileHeader: "",
		fileBody: "",
	});

	const [version, setVersion] = useState("");
	const [clientMessageName, setClientMessageName] = useState("");
	const [archiveFileData, setArchiveFileData] = useState([]);
	const [selectedTableName, setSelectedTableName] = useState({
		tableName: "",
		tableData: "",
		rows: "",
		columns: "",
	});

	function convertEpochToCustomFormat(epoch) {
		// Convert epoch to milliseconds (if it's in seconds)
		const date = new Date(epoch * 1000);

		// return date.toUTCString(); // Convert to UTC string

		// Extract components
		const year = date.getUTCFullYear();
		const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
		const day = String(date.getUTCDate()).padStart(2, "0");
		const hours = String(date.getUTCHours()).padStart(2, "0");
		const minutes = String(date.getUTCMinutes()).padStart(2, "0");
		const seconds = String(date.getUTCSeconds()).padStart(2, "0");

		// Combine components into the desired format
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	}

	function handleClientMessageName(item) {
		setClientMessageName(item.trim());
	}
	function handleVersion(item) {
		setVersion(item.trim());
	}

	function handleArchiveFile(item) {
		setArchiveFile(item);
		setArchiveFileData([]);
	}

	function handleArchiveFileData(item) {
		console.log(item);

		for (let key in item) {
			// console.log(`${key}->${item[key]}`);
			setArchiveFileData((prevValues) => {
				return [
					...prevValues,
					{
						tableName: key,
						tableData: item[key],
						rows: item[key].length,
						columns: item[key][0].length,
					},
				];
			});
		}
	}

	function handleFile(event) {
		for (var i = 0; i < event.target.files.length; i++) {
			const file = event.target.files[i];

			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => {
				setMapperFiles((prevValues) => {
					return [
						...prevValues,
						{
							fileName: file.name,
							fileContent: reader.result.slice(
								reader.result.indexOf("<Maps>")
							),
						},
					];
				});
			};

			reader.onerror = () => {
				console.log("File error", reader.error);
				toast.error("Error in loading file");
			};
		}

		toast.success("Mapper Files loaded successfully");
	}

	function handleTableSelection(item) {
		setSelectedTableName({
			tableName: item.tableName,
			tableData: item.tableData,
			rows: item.rows,
			columns: item.columns,
		});
	}

	function handleUpdateSelectedTable(indeces) {
		if (indeces.length > 0) {
			setSelectedTableName((prevData) => ({
				...prevData,
				tabledata: prevData.tableData.map((row) =>
					row.map((value, index) =>
						indeces.includes(index)
							? convertEpochToCustomFormat(value)
							: value
					)
				),
			}));
		}
	}

	return (
		<>
			<div className="App">
				<p>Please Upload Mapper Files</p>
				<input type="file" onChange={handleFile} multiple />
			</div>
			<div className="converter">
				<Input
					archiveFile={archiveFile}
					handleArchiveFile={handleArchiveFile}
				/>
				<Column
					archiveFile={archiveFile}
					mapperFiles={mapperFiles}
					archiveFileData={archiveFileData}
					handleArchiveFileData={handleArchiveFileData}
					handleClientMessageName={handleClientMessageName}
					handleVersion={handleVersion}
					handleTableSelection={handleTableSelection}
				/>
				<Data
					archiveFile={archiveFile}
					version={version}
					clientMessageName={clientMessageName}
					archiveFileData={archiveFileData}
					mapperFiles={mapperFiles}
					selectedTableName={selectedTableName}
					handleUpdateSelectedTable={handleUpdateSelectedTable}
				/>
			</div>

			<ToastContainer position="bottom-right" />
		</>
	);
}

export default App;
