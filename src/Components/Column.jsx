import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Column(props) {
	const [clientMessageName, setClientMessageName] = useState("");
	const [version, setVersion] = useState("");

	useEffect(() => {
		const content = props.archiveFile.fileHeader.split("\n");
		const messageName = content.filter((item) => {
			return item.includes("clientMessageName");
		});
		// console.log(messageName);
		if (messageName.length > 0) {
			const name = messageName[0].split("=")[1];
			console.log(name);

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
		}
	}, [props.archiveFile]);

	return (
		<>
			<div className="column-display">
				<div className="column-tables"></div>
				<div className="column-header-data">
					{version}
					{/* {props.archiveFile.fileBody} */}
				</div>
			</div>
		</>
	);
}
