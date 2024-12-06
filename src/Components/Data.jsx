import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/data.css";

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
							});
						}
					});
				});
			}

			setColumnNames(names);
		}
	}, [props.selectedTableName]);

	return (
		<>
			{/* <div className="data"> */}
			<div className={`data ${isSelected ? "show" : ""}`}>
				<table>
					{isSelected && (
						<thead>
							<tr>
								{columnNames.map((item) => (
									<th>{item}</th>
								))}
							</tr>
						</thead>
					)}

					{isSelected && (
						<tbody>
							{filteredTable.tableData.map((row) => (
								<tr key={row.join()}>
									{row.map((cell, index) => (
										<td key={index}>{cell}</td>
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
