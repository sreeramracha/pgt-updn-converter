import { useEffect, useState } from "react";

export default function Column(props) {
	const [clientMessageName, setClientMessageName] = useState("");
	const [version, setVersion] = useState();

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
	}, [props.archiveFile]);

	return (
		<>
			<div className="column-display">
				<div className="column-tables"></div>
				<div className="column-header-data"></div>
			</div>
		</>
	);
}
