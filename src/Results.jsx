import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Results = () => {
    const pdfRef=useRef()
    let [project,setProject]=useState(JSON.parse(localStorage.getItem('project')))
    


let downloadPdf=()=>{
    const input=pdfRef.current;
    html2canvas(input).then((canvas)=>{
        const imgData=canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4',true);
        const pdfWidth=pdf.internal.pageSize.getWidth();
        const pdfHeight=pdf.internal.pageSize.getHeight();
        const imgWidth=canvas.width;
        const imgHeight=canvas.height;
        const ratio= Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
        const imgX=(pdfWidth-imgWidth*ratio)/2;
        const imgY=30;
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
        pdf.save('project.pdf')

    })
}










  return (
<>

<div className="overflow-x-auto" ref={pdfRef}>
  <table className="table">
    {/* head */}
    <thead>
      <tr>

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

      <tr>
     
        <td>{project.projectName}</td>
        <td>{project.projectDescription}</td>
        <td>{project.clientValue}</td>
        <td>{project.contractor}</td>
        <td>{project.max_X}</td>
        <td>{project.min_X}</td>
        <td>{project.max_Y}</td>
        <td>{project.min_Y}</td>
        <td>{project.max_Z}</td>
        <td>{project.min_Z}</td>
      </tr>

    
    </tbody>
  </table>
</div>


<button className='btn bg-blue-400' onClick={downloadPdf}>Download PDF</button>





</>
  )
}

export default Results
