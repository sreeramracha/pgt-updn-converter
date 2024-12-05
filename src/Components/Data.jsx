import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/data.css";

export default function Data(props) {
	const [filePath, setFilePath] = useState();

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
	}, [props.archiveFile]);

	return (
		<>
			<div className="data">
				<table>
					<thead>
						<tr>
							{props.archiveFileData.map((item) => (
								<th>{item.tableName}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{props.archiveFileData.map((item) => (
							<tr>
								{item.tableData.map((x) =>
									x.map((y) => <td>{y}</td>)
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
