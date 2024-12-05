import { useState } from "react";
import "../styles/input.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Input(props) {
	function handleFile(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => {
				props.handleArchiveFile({
					fileName: file.name,
					fileContent: reader.result.slice(
						reader.result.indexOf("<Maps>")
					),
					fileHeader: reader.result.slice(
						0,
						reader.result.indexOf("<?xml")
					),
					fileBody: reader.result.slice(
						reader.result.indexOf("<?xml")
					),
				});
			};

			reader.onerror = () => {
				console.log("File error", reader.error);
				toast.error("Error in loading file");
			};
			toast.success("Archive File loaded successfully");
		}
	}

	return (
		<>
			<div className="input-field">
				<p>File name:</p>
				<textarea
					name=""
					id=""
					value={props.archiveFile.fileName}
					readOnly={true}
				></textarea>
				<input type="file" name="" id="" onChange={handleFile} />
			</div>
		</>
	);
}
