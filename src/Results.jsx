import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Results = () => {
  const pdfRef = useRef();
  let [project, setProject] = useState(
    JSON.parse(localStorage.getItem("project"))
  );

  let downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("project.pdf");
    });
  };

  return (
    <>
      <div className="text-end ">
        <button
          className=" btn mt-6  text-white px-8 shadow-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"
          onClick={downloadPdf}
        >
          Download PDF
        </button>
      </div>
      <div className="overflow-x-auto mt-32" ref={pdfRef}>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-400  text-white font-bold ">
              <th>Project Name</th>
              <th>Project Description</th>
              <th>Client</th>
              <th>Contractor</th>
              <th>Max X</th>
              <th>Min X</th>
              <th>Max Y</th>
              <th>Min Y</th>
              <th>Max Z</th>
              <th>Min Z</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td>{project?.projectName}</td>
              <td>{project?.projectDescription}</td>
              <td>{project?.clientValue}</td>
              <td>{project?.contractor}</td>
              <td>{project?.max_X}</td>
              <td>{project?.min_X}</td>
              <td>{project?.max_Y}</td>
              <td>{project?.min_Y}</td>
              <td>{project?.max_Z}</td>
              <td>{project?.min_Z}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Results;
