import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/data.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Data(props) {
	const [filePath, setFilePath] = useState("");
	const [filteredTable, setFilteredTable] = useState({
		tableName: "",
		tableData: "",
		rows: "",
		columns: "",
	});
	const [isSelected, setIsSelected] = useState(false);
	const [columnNames, setColumnNames] = useState([]);
	const [isExceptionInterface, setIsExceptionInterface] = useState(false);
	const [timeStampIndeces, setTimeStampIndeces] = useState([]);
	const [isAscending, setIsAscending] = useState(false);
	const [isDescending, setIsDescending] = useState(false);
	const [selectedTableIndex, setSelectedTableIndex] = useState(null);
	const [selectedRows, setSelectedRows] = useState([]); // Store indices of selected rows
	const [lastClickedRow, setLastClickedRow] = useState(null); // Track the last clicked row for shift selection

	const smartSellingImportData = "SmartSellingImportData.xml";
	const smartSellingExportData = "SmartSellingExportData.xml";
	const smartSellingExportTablesStatic = "SmartSellingExportTablesStatic.xml";
	const smartSellingExportTablesUpdate = "SmartSellingExportTablesUpdate.xml";
	const smartSellingExportTablesDynamic =
		"SmartSellingExportTablesDynamic.xml";

	const importData = "ImportData.xml";
	const exportData = "ExportData.xml";
	const checkIn = "Checkin.xml";
	const adjustment = "Adjustment.xml";
	const gateCheckout = "Gatecheckout.xml";
	const findNonRteCust = "FindNonRteCust.xml";
	const getNonRteCustTables = "GetNonRteCustTables.xml";

	useEffect(() => {
		if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingImportData".toLowerCase()
		) {
			setFilePath(smartSellingImportData);
		}

		//  SMARTR

		if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingImportData".toLowerCase()
		) {
			setFilePath(smartSellingImportData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingExportTables".toLowerCase()
		) {
			setFilePath(smartSellingExportData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingExportTablesStatic".toLowerCase()
		) {
			setFilePath(smartSellingExportTablesStatic);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingExportTablesUpdate".toLowerCase()
		) {
			setFilePath(smartSellingExportTablesUpdate);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingExportTablesDynamic".toLowerCase()
		) {
			setFilePath(smartSellingExportTablesDynamic);
		}

		//  DELIVER SMARTR
		else if (
			props.clientMessageName.toLowerCase() === "Upload".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() === "CheckIn".toLowerCase()
		) {
			setFilePath(checkIn);
		} else if (
			props.clientMessageName.toLowerCase() === "Dispatch".toLowerCase()
		) {
			setFilePath(exportData);
		} else if (
			props.clientMessageName.toLowerCase() === "UploadOFH".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() === "Adjustment".toLowerCase()
		) {
			setFilePath(adjustment);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"OrderInsert".toLowerCase()
		) {
			setFilePath(smartSellingImportData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"EventUpload".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"CollabOrder".toLowerCase()
		) {
			toast.error("Not present");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"DispatchLoc".toLowerCase()
		) {
			setFilePath(exportData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"InvenUpload".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"NextDayLoad".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"FullDownload".toLowerCase()
		) {
			setFilePath(exportData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"Gatecheckout".toLowerCase()
		) {
			setFilePath(gateCheckout);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"InvoiceUpload".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"EndOfDayUpload".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"FindNonRteCust".toLowerCase()
		) {
			setFilePath(findNonRteCust);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SetRouteStatus".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"InvoiceImageUpload".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"GetNonRteCustTables".toLowerCase()
		) {
			setFilePath(getNonRteCustTables);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"NonInvoicePaymentUpload".toLowerCase()
		) {
			setFilePath(importData);
		}

		// OTHERS
		else if (
			props.clientMessageName.toLowerCase() === "Download".toLowerCase()
		) {
			setFilePath(exportData);
		} else if (
			props.clientMessageName.toLowerCase() === "ExportData".toLowerCase()
		) {
			setFilePath(exportData);
		} else if (
			props.clientMessageName.toLowerCase() === "ImportData".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() ===
			"ExpressOrderInsert".toLowerCase()
		) {
			setFilePath(importData);
		} else if (
			props.clientMessageName.toLowerCase() === "StaticHOS".toLowerCase()
		) {
			setFilePath("ExportStaticHOS.xml");
		} else if (
			props.clientMessageName.toLowerCase() === "DynamicHOS".toLowerCase()
		) {
			setFilePath("ExportDynamicHOS.xml");
		} else if (
			props.clientMessageName.toLowerCase() === "GetNextIds".toLowerCase()
		) {
			setFilePath("GetNextIds.xml");
		} else if (
			props.clientMessageName.toLowerCase() === "GetHOSData".toLowerCase()
		) {
			setFilePath("ExportStaticEHOS.xml");
		} else if (
			props.clientMessageName.toLowerCase() === "StaticEVCR".toLowerCase()
		) {
			setFilePath("ExportStaticEVCR.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"FSVGateless".toLowerCase()
		) {
			setFilePath("ExportFSVGateless.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"DynamicEVCR".toLowerCase()
		) {
			setFilePath("ExportDynamicEVCR.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"GetEVCRData".toLowerCase()
		) {
			toast.error("Mapper File is not present");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"GetInvoiceIds".toLowerCase()
		) {
			setFilePath("GetInvoiceIds.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"GetKronosData".toLowerCase()
		) {
			setFilePath("ExportDynamicEHOS.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"ConfigRequest".toLowerCase()
		) {
			toast.error("Not present");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"ExpressConfig".toLowerCase()
		) {
			toast.error("Not present");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"FsvCallListData".toLowerCase()
		) {
			setFilePath("FsvCallListData.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"ExportStaticEHOS".toLowerCase()
		) {
			setFilePath("ExportStaticEHOS.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"ExportStaticEVCR".toLowerCase()
		) {
			setFilePath("ExportStaticEVCR.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"GetDispatchLoads".toLowerCase()
		) {
			setFilePath("GetDispatchLoads.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"ExportDynamicEHOS".toLowerCase()
		) {
			setFilePath("ExportDynamicEHOS.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"ExportDynamicEVCR".toLowerCase()
		) {
			setFilePath("ExportDynamicEVCR.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingMerch".toLowerCase()
		) {
			setFilePath("SmartSellingMerch.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingConfig".toLowerCase()
		) {
			setFilePath("SmartSellingConfig.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingGetNextIds".toLowerCase()
		) {
			setFilePath("SmartSellingGetNextIds.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingExportMedia".toLowerCase()
		) {
			setFilePath("SmartSellingExportMedia.xml");
		} else if (
			props.clientMessageName.toLowerCase() ===
			"SmartSellingExportSpreadSheet".toLowerCase()
		) {
			setFilePath("SmartSellingExportSpreadSheet.xml");
		}

		setIsSelected(false);
	}, [props.archiveFile, props.clientMessageName]);

	useEffect(() => {
		if (
			props.archiveFileData.length > 0 &&
			props.selectedTableName.tableName.length > 0
		) {
			const temp = props.archiveFileData.filter((item) => {
				return item.tableName === props.selectedTableName.tableName;
			});

			setFilteredTable({
				tableName: temp[0].tableName,
				tableData: temp[0].tableData,
				rows: temp[0].rows,
				columns: temp[0].columns,
			});

			setIsSelected(true);
		}

		if (props.mapperFiles.length > 0) {
			setColumnNames([]);
			const filteredMapperFile = props.mapperFiles.filter((item) => {
				return item.fileName === filePath;
			});

			const exceptionInterface = [
				"ImportData.xml",
				"SmartSellingImportData.xml",
			];

			setIsExceptionInterface(exceptionInterface.includes(filePath));

			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(
				filteredMapperFile[0].fileContent,
				"text/xml"
			);

			// Find all <Map> elements with the matching version
			const maps = xmlDoc.querySelectorAll(
				`Map[version="${props.version}"]`
			);

			const names = [];
			const dateIndeces = [];

			if (isExceptionInterface) {
				maps.forEach((map) => {
					const tables = map.getElementsByTagName("Table");
					Array.from(tables).forEach((table) => {
						const tableNameTag =
							table.getElementsByTagName("Name")[0];
						const tableNameTagValue =
							tableNameTag.textContent.trim();
						if (
							tableNameTagValue.toLowerCase() ===
							props.selectedTableName.tableName.toLowerCase()
						) {
							const columns =
								table.getElementsByTagName("StoredProcedure");
							Array.from(columns).forEach((column) => {
								const parameters =
									column.getElementsByTagName("Parameter");

								Array.from(parameters).forEach((parameter) => {
									const nameTag =
										parameter.getElementsByTagName(
											"Name"
										)[0];
									if (nameTag) {
										names.push(nameTag.textContent.trim());
									}

									const typeTag =
										parameter.getElementsByTagName(
											"Type"
										)[0];
									if (typeTag) {
										dateIndeces.push(
											typeTag.textContent.trim()
										);
									}
								});
							});
						}
					});
				});
			} else {
				maps.forEach((map) => {
					const tables = map.getElementsByTagName("Table");
					Array.from(tables).forEach((table) => {
						const tableNameTag =
							table.getElementsByTagName("Name")[0];
						const tableNameTagValue =
							tableNameTag.textContent.trim();
						if (
							tableNameTagValue.toLowerCase() ===
							props.selectedTableName.tableName.toLowerCase()
						) {
							const columns =
								table.getElementsByTagName("Column");
							Array.from(columns).forEach((column) => {
								const nameTag =
									column.getElementsByTagName("Name")[0];
								if (nameTag) {
									names.push(nameTag.textContent.trim());
								}

								const typeTag =
									column.getElementsByTagName("Type")[0];
								if (typeTag) {
									dateIndeces.push(
										typeTag.textContent.trim()
									);
								}
							});
						}
					});
				});
			}

			setColumnNames(names);

			if (!props.selectedTableName.tableData.includes("BCPTable")) {
				const indeces = [];
				dateIndeces.forEach((item, index) => {
					if (
						item.toLowerCase() === "timestamp".toLowerCase() ||
						item.toLowerCase() === "date".toLowerCase()
					) {
						indeces.push(index);
					}
				});

				// console.log(indeces);

				setTimeStampIndeces(indeces);
			}
		}

		setIsAscending(false);
		setIsDescending(false);
		setSelectedRows([]);
		setLastClickedRow(null);
	}, [props.selectedTableName]);

	function convertEpochToCustomFormat(epoch) {
		// Convert epoch to milliseconds (if it's in seconds)
		const date = new Date(epoch * 1000);

		// return date.toUTCString(); // Convert to UTC string

		// Extract components
		const year = date.getUTCFullYear();
		const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
		const day = String(date.getUTCDate()).padStart(2, "0");
		const hours = String(date.getUTCHours()).padStart(2, "0");
		const minutes = String(date.getUTCMinutes()).padStart(2, "0");
		const seconds = String(date.getUTCSeconds()).padStart(2, "0");

		// Combine components into the desired format
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	}

	function handleSorting(index) {
		setSelectedTableIndex(index);
		if (isAscending === isDescending) {
			setIsAscending(true);
			setIsDescending(false);
		} else {
			setIsAscending(!isAscending);
			setIsDescending(!isDescending);
		}

		setFilteredTable((prev) => {
			const sortedData = [...prev.tableData].sort((a, b) => {
				const valueA = a[index];
				const valueB = b[index];

				if (isAscending) {
					// Check if both values are numbers
					if (!isNaN(valueA) && !isNaN(valueB)) {
						return parseFloat(valueB) - parseFloat(valueA); // Numerical comparison
					}

					// Otherwise, use string comparison
					return valueB.toString().localeCompare(valueA.toString());
				} else {
					// Check if both values are numbers
					if (!isNaN(valueA) && !isNaN(valueB)) {
						return parseFloat(valueA) - parseFloat(valueB); // Numerical comparison
					}

					// Otherwise, use string comparison
					return valueA.toString().localeCompare(valueB.toString());
				}
			});

			return { ...prev, tableData: sortedData };
		});
	}

	function handleCellClick(index, column, event) {
		if (column !== 0) return; // Only highlight if clicked in the first column

		if (event.ctrlKey || event.metaKey) {
			// Ctrl/Command click: Toggle selection
			setSelectedRows(
				(prevSelected) =>
					prevSelected.includes(index)
						? prevSelected.filter((i) => i !== index) // Deselect if already selected
						: [...prevSelected, index] // Add to selection
			);
		} else if (event.shiftKey && lastClickedRow !== null) {
			// Shift click: Select range
			const start = Math.min(lastClickedRow, index);
			const end = Math.max(lastClickedRow, index);
			const range = Array.from(
				{ length: end - start + 1 },
				(_, i) => start + i
			);
			setSelectedRows((prevSelected) => [
				...new Set([...prevSelected, ...range]),
			]);
		} else {
			// Single click: Select only this row
			setSelectedRows([index]);
		}
		setLastClickedRow(index); // Update last clicked row

		console.log(selectedRows);
		console.log(lastClickedRow);
	}

	return (
		<>
			{/* <div className="data"> */}
			<div className={`data ${isSelected ? "show" : ""}`}>
				<table>
					{isSelected && (
						<thead>
							<tr>
								<th></th>
								{columnNames.map((item, index) => (
									<th
										key={index}
										onClick={() => {
											handleSorting(index);
										}}
									>
										{item}
										{index === selectedTableIndex &&
										isAscending ? (
											<FaLongArrowAltDown />
										) : (
											""
										)}
										{index === selectedTableIndex &&
										isDescending ? (
											<FaLongArrowAltUp />
										) : (
											""
										)}
									</th>
								))}
							</tr>
						</thead>
					)}

					{isSelected && (
						<tbody>
							{filteredTable.tableData.map((row, index) => (
								<tr
									key={row.join()}
									style={{
										backgroundColor: selectedRows.includes(
											index
										)
											? "#d3f9d8"
											: "white", // Highlight selected rows
									}}
								>
									<td
										onClick={(event) =>
											handleCellClick(index, 0, event)
										} // Only respond to first column clicks
										style={{ cursor: "pointer" }}
									>
										{index + 1}
									</td>
									{row.map((cell, index) => (
										<td key={index}>
											{timeStampIndeces.includes(index)
												? cell.toString().includes(":")
													? cell
													: convertEpochToCustomFormat(
															cell
													  )
												: cell}
										</td>
									))}
								</tr>
							))}
						</tbody>
					)}
				</table>
			</div>
		</>
	);
}
