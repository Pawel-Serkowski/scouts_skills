import React from "react";
import { useReactToPrint } from "react-to-print";

const SaveAsPdfButton = (props) => {
  const generatePDF = useReactToPrint({
    content: () => props.pdf.current,
    documentTitle: props.title,
    onAfterPrint: () => props.download(),
  });

  async function saveAsPDFHandler() {
    await props.download();
    generatePDF();
  }

  return (
    <div className="download-button-box">
      <button className="download-button" onClick={saveAsPDFHandler}>
        <i className="fa-solid fa-download"></i> Pobierz Kartę
      </button>
    </div>
  );
};

export default SaveAsPdfButton;
