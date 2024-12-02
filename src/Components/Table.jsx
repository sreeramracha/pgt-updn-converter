export default function Table(props) {
	return (
		<>
			<p>{props.item.tableName}</p>
			<p>{`Number of rows: ${props.item.rows}`}</p>
			<p>{`Number of column: ${props.item.columns}`}</p>
			{props.item.tableData.map((x) => (
				<p>
					{x.map((y) => (
						<p>{y}</p>
					))}
				</p>
			))}
		</>
	);
}
