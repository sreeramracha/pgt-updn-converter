import { useEffect, useState } from "react";
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
	const [archiveFileData, setArchiveFileData] = useState();

	function handleArchiveFile(item) {
		setArchiveFile(item);
	}

	function handleArchiveFileData(item) {
		setArchiveFileData(item);
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

	return (
		<>
			<div className="App">
				<p>Please Upload Mapper Files</p>
				<input type="file" onChange={handleFile} multiple />
			</div>
			<div className="converter">
				{/* {console.log(archiveFile)} */}
				<Input
					archiveFile={archiveFile}
					handleArchiveFile={handleArchiveFile}
				/>
				<Column
					archiveFile={archiveFile}
					mapperFiles={mapperFiles}
					archiveFileData={archiveFileData}
					handleArchiveFileData={handleArchiveFileData}
				/>
				<Data />
			</div>

			<ToastContainer />
		</>
	);
}

export default App;