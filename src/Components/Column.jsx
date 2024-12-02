import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "./Table";
import "../styles/column.css";
import TableColumnNames from "./TableColumnNames";

export default function Column(props) {
	const [clientMessageName, setClientMessageName] = useState("");
	const [version, setVersion] = useState("");
	const [xmlHeader, setXmlHeader] = useState([]);

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

			setClientMessageName(name);
		} else {
			const messagePIPOName = content.filter((item) => {
				return item.includes("clientMessagePIPOName");
			});
			if (messagePIPOName.length > 0) {
				const name = messagePIPOName[0].split("=")[1];
				// console.log(name);

				setClientMessageName(name);
			}
		}

		if (props.archiveFile.fileBody.length > 0) {
			// const parser = new XMLParser();
			// const result = parser.parse(props.archiveFile.fileBody);
			// setVersion(result.Envelope.Body.ExportData.Version);
			const match = props.archiveFile.fileBody.match(
				/<Version>(.*?)<\/Version>/
			);

			setVersion(match[1]);

			try {
				const parser = new XMLParser();
				const result = parser.parse(props.archiveFile.fileBody);

				const mapData =
					result.Envelope?.Body?.ImportData?.MapData?.Table || [];
				const dictionary = {};

				// Ensure mapData is treated as an array
				const tables = Array.isArray(mapData) ? mapData : [mapData];

				tables.forEach((table) => {
					const tableName = table.Name;
					const rows = table.row;

					if (tableName && rows) {
						// Ensure rows is an array
						const rowArray = Array.isArray(rows) ? rows : [rows];
						dictionary[tableName] = rowArray.map((row) => {
							// Ensure <c> values are treated as an array
							return Array.isArray(row.c) ? row.c : [row.c];
						});
					}
				});

				props.handleArchiveFileData(dictionary);
				// props.handleSortArchiveFileData();
			} catch (error) {
				console.error("Error parsing XML:", error);
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
			<div className="column-display">
				{/* <div className="column-tables"> */}
				<TableColumnNames archiveFileData={props.archiveFileData} />
				{/* {props.archiveFileData.map((item) => (
						<TableColumnNames item={item} />
					))} */}
				{/* </div> */}
				<div className="column-header-data">
					{xmlHeader.map((item) => (
						<p>{item}</p>
					))}

					{/* <p>
						{props.archiveFileData.map((item) => (
							<Table item={item} />
						))}
					</p> */}
				</div>
			</div>
		</>
	);
}
