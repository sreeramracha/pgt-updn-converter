import { useState } from "react";

export default function Testing() {
	const smartSellingImportData = "SmartSellingImportData.xml";
	const smartSellingExportData = "SmartSellingExportData.xml";
	const smartSellingExportTablesStatic = "SmartSellingExportTablesStatic.xml";
	const smartSellingExportTablesUpdate = "SmartSellingExportTablesUpdate.xml";
	const smartSellingExportTablesDynamic =
		"SmartSellingExportTablesDynamic.xml";

	const importData = "ImportData.xml";
	const exportData = "ExportData.xml";
	const checkin = "Checkin.xml";
	const adjustment = "Adjustment.xml";
	const gatecheckout = "Gatecheckout.xml";
	const findNonRteCust = "FindNonRteCust.xml";
	const getNonRteCustTables = "GetNonRteCustTables.xml";

	const [xmlFiles, setXmlFiles] = useState([]);

	function handleFile(event) {
		for (var i = 0; i < event.target.files.length; i++) {
			const file = event.target.files[i];

			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => {
				setXmlFiles((prevValues) => {
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
			};
		}
	}

	function handleDisplayXmlTag(event) {
		const tempString = event.target.value;
		console.log(tempString);
	}

	return (
		<>
			<input type="file" onChange={handleFile} multiple />

			<br />
			{console.log(xmlFiles)}
			{/* <div className="file-contents">
            {xmlFiles.map((item, index) => (
                <Content key={index} item={item} />
            ))}
        </div> */}
			<input type="text" onChange={handleDisplayXmlTag} />
		</>
	);
}
