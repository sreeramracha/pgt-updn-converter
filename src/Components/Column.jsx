import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/column.css";
import TableColumnNames from "./TableColumnNames";

export default function Column(props) {
	const [xmlHeader, setXmlHeader] = useState([]);
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		setXmlHeader([]);
		const content = props.archiveFile.fileHeader.split("\n");
		const messageName = content.filter((item) => {
			return item.includes("clientMessageName");
		});
		// console.log(messageName);
		if (messageName.length > 0) {
			const name = messageName[0].split("=")[1];
			// console.log(name);

			props.handleClientMessageName(name);
		} else {
			const messagePIPOName = content.filter((item) => {
				return item.includes("clientMessagePIPOName");
			});
			if (messagePIPOName.length > 0) {
				const name = messagePIPOName[0].split("=")[1];
				// console.log(name);

				props.handleClientMessageName(name);
			}
		}

		if (props.archiveFile.fileBody.length > 0) {
			setIsSelected(true);
			// const parser = new XMLParser();
			// const result = parser.parse(props.archiveFile.fileBody);
			// setVersion(result.Envelope.Body.ExportData.Version);
			try {
				const match = props.archiveFile.fileBody.match(
					/<Version>(.*?)<\/Version>/
				);

				if (match[1].trim().length <= 0) {
					toast.error("Version not found");
				}
				props.handleVersion(match[1].trim());
			} catch (error) {
				toast.error("Version was not found");
			}

			try {
				if (props.archiveFile.fileBody.includes("BCPTable")) {
					const temp = props.archiveFile.fileBody.slice(
						props.archiveFile.fileBody.indexOf("<MapTables>"),
						props.archiveFile.fileBody.indexOf("</MapTables>") + 10
					);
					const parser = new DOMParser();
					const xmlDoc = parser.parseFromString(temp, "text/xml");

					const dictionary = {};

					// Get all BCPTable nodes
					const bcpTables = xmlDoc.getElementsByTagName("BCPTable");

					for (const table of bcpTables) {
						// Extract <Name> value
						const name = table
							.getElementsByTagName("Name")[0]
							?.textContent.trim();

						// Extract <BCPData> and split into lines
						const bcpDataContent = table
							.getElementsByTagName("BCPData")[0]
							?.textContent.trim();
						const bcpDataArray = bcpDataContent
							.split("\n") // Split by newlines
							.map((line) => line.trim()) // Trim whitespace from each line
							.filter((line) => line) // Remove empty lines
							.map((line) =>
								line.split("|").filter((value) => value)
							); // Split by | and remove empty values

						// Assign to the dictionary object
						if (name) {
							dictionary[name] = bcpDataArray;
						}
					}

					props.handleArchiveFileData(dictionary);
				} else {
					const temp = props.archiveFile.fileBody.slice(
						props.archiveFile.fileBody.indexOf("<MapData>"),
						props.archiveFile.fileBody.indexOf("</MapData>") + 10
					);
					const parser = new XMLParser();
					const result = parser.parse(temp);

					const mapData = result.MapData?.Table || [];
					const dictionary = {};

					// Ensure mapData is treated as an array
					const tables = Array.isArray(mapData) ? mapData : [mapData];

					tables.forEach((table) => {
						const tableName = table.Name;
						const rows = table.row;

						if (tableName && rows) {
							// Ensure rows is an array
							const rowArray = Array.isArray(rows)
								? rows
								: [rows];
							dictionary[tableName] = rowArray.map((row) => {
								// Ensure <c> values are treated as an array
								return Array.isArray(row.c) ? row.c : [row.c];
							});
						}
					});

					props.handleArchiveFileData(dictionary);
				}
			} catch (error) {
				console.error("Error parsing XML:", error);
				toast.error("Error parsing XML");
				props.handleArchiveFileData({});
			}
		}

		const line = props.archiveFile.fileHeader.split("\n");
		line.forEach((sentence) =>
			setXmlHeader((prevValue) => [...prevValue, sentence])
		);
	}, [props.archiveFile]);

	return (
		<>
			{/* <div className="column-display"> */}
			<div className={`column-display ${isSelected ? "show" : ""}`}>
				<TableColumnNames
					archiveFileData={props.archiveFileData}
					handleTableSelection={props.handleTableSelection}
				/>

				<div className="column-header-data">
					{xmlHeader.map((item) => (
						<p>{item}</p>
					))}
				</div>
			</div>
		</>
	);
}
