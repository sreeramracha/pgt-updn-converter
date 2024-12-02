import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Data(props) {
	const smartSellingImportData = "SmartSellingImportData.xml";
	const smartSellingExportData = "SmartSellingExportData.xml";
	const smartSellingExportTablesStatic = "SmartSellingExportTablesStatic.xml";
	const smartSellingExportTablesUpdate = "SmartSellingExportTablesUpdate.xml";
	const smartSellingExportTablesDynamic =
		"SmartSellingExportTablesDynamic.xml";

	const importData = "ImportData.xml";
	const exportData = "ExportData.xml";
	const checkin = "Checkin.xml";
	const adjustment = "Adjustment.xml";
	const gatecheckout = "Gatecheckout.xml";
	const findNonRteCust = "FindNonRteCust.xml";
	const getNonRteCustTables = "GetNonRteCustTables.xml";

	useEffect(() => {}, [props.archiveFile]);

	return <></>;
}
