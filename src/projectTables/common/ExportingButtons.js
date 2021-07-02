import React from 'react'
import { faFileCsv, faFileExcel} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExportingButtons({exportData}) {
    const bstyle = {
        borderRadius: '30px',
        boxShadow: "0px 5px 10px grey",
    }
    return (
        <div>            

            <button className="btn btn-outline-success mr-1"
                onClick={() => { exportData("csv", false);}} style={bstyle}>
                <FontAwesomeIcon icon={faFileCsv} size="1x"/>Current as CSV
            </button>

            <button className="btn btn-outline-success  mr-1"
                onClick={() => { exportData("xlsx", false);}} style={bstyle}>
                <FontAwesomeIcon icon={faFileExcel} size="1x"/>Current as xlsx
            </button>

            <button className="btn btn-success  mr-1"
                onClick={() => { exportData("csv", true);}} style={bstyle}>
                <FontAwesomeIcon icon={faFileCsv} size="1x"/>All as CSV
            </button>

            <button className="btn btn-success  mr-1"
                onClick={() => {exportData("xlsx", true);}} style={bstyle}>
                <FontAwesomeIcon icon={faFileExcel} size="1x"/>All as xlsx
            </button>
            
            
            {/* <button
            onClick={() => {
                exportData("pdf", true);
            }}
            >
            Export All as PDF
            </button>{" "}
            <button
            onClick={() => {
                exportData("pdf", false);
            }}
            >
            Export Current View as PDF
            </button> */}
        </div>
    )
}

export default ExportingButtons
