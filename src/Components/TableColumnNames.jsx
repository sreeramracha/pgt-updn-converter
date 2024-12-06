import { useState } from "react";
import "../styles/tablecolumnnames.css";

export default function TableColumnNames(props) {
	const [selectedIndex, setSelectedIndex] = useState();
	const sortedData = [...props.archiveFileData].sort((a, b) =>
		a.tableName.localeCompare(b.tableName)
	);

	function handleHighlightTableName(index) {
		setSelectedIndex(index);
		props.handleTableSelection(sortedData[index]);
	}

	return (
		<>
			<div className="column-tables">
				<table>
					<thead>
						<tr>
							<th>Table Name</th>
							<th>Column Count</th>
							<th>Row Count</th>
						</tr>
					</thead>
					<tbody>
						{sortedData.map((item, index) => (
							<tr
								key={index}
								onClick={() => handleHighlightTableName(index)}
								style={{
									backgroundColor:
										selectedIndex === index
											? "rgb(255, 255, 0)"
											: "", // Conditional styling
									cursor: "pointer",
								}}
							>
								<td>{item.tableName}</td>
								<td>{item.columns}</td>
								<td>{item.rows}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
