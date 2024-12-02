import "../styles/tablecolumnnames.css";

export default function TableColumnNames(props) {
	const sortedData = [...props.archiveFileData].sort((a, b) =>
		a.tableName.localeCompare(b.tableName)
	);

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
						{sortedData.map((item) => (
							<tr>
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
