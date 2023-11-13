import React from "react";
import jsPDF from "jspdf";

const SaveAsPdfButton = () => {
  const saveAsPDFHandler = () => {
    const element = document.getElementById("customise-skill-page__page");
    const pdf = new jsPDF();
    pdf.addHTML(element, () => {
      pdf.save("document.pdf");
    });

    console.log("chuj");
  };

  return (
    <div className="download-button-box">
      <button className="download-button" onClick={saveAsPDFHandler}>
        <i className="fa-solid fa-download"></i> Pobierz Kartę
      </button>
    </div>
  );
};

export default SaveAsPdfButton;
