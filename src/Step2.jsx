import React, { useContext, useState } from 'react'
import Papa from 'papaparse';
import { functions } from './ContextAPI/ContextAPI';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Step2 = () => {
  const {projectName,
    projectDescription,
    clientValue,
    contractor,
    projectDetails,
    getProjectDetails,
    }=useContext(functions)

  const [Datas, setDatas] = useState({})
  const navigate=useNavigate()
  const [csvData, setCsvData] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
const[maxX,setMaxX]=useState(0)
const[minX,setMinX]=useState(0)
const[maxY,setMaxY]=useState(0)
const[minY,setMinY]=useState(0)
const[maxZ,setMaxZ]=useState(0)
const[minZ,setMinZ]=useState(0)


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvContent = e.target.result;
        Papa.parse(csvContent, {
          complete: handleCsvParsed,
        });
      };
      reader.readAsText(file);
      setFileUploaded(true);
    }
  };

  const handleCsvParsed = (result) => {
    const parsedCsvData = result.data;
    
    setCsvData(parsedCsvData);
    const dataObjects = parsedCsvData.map((row) => ({
      KP: parseInt(row[0]), 
      X: parseFloat(row[1]), 
      Y: parseFloat(row[2]), 
      Z: parseFloat(row[3]), 
    }));

    updateMinMaxValues(dataObjects);
  };
  const updateMinMaxValues = (dataObjects) => {
    const xValues = dataObjects.map((row) => row.X).filter((value) => !isNaN(value));
    const yValues = dataObjects.map((row) => row.Y).filter((value) => !isNaN(value));
    const zValues = dataObjects.map((row) => row.Z).filter((value) => !isNaN(value));
  
    const maxX = Math.max(...xValues);
    const minX = Math.min(...xValues);
    const maxY = Math.max(...yValues);
    const minY = Math.min(...yValues);
    const maxZ = Math.max(...zValues);
    const minZ = Math.min(...zValues);
  
    setDatas({
      max_X: maxX,
      min_X: minX,
      max_Y: maxY,
      min_Y: minY,
      max_Z: maxZ,
      min_Z: minZ,
    });
  };


  let handleSubmit = (e) => {
    e.preventDefault();
    let max_X = e.target.max_X.value;
    let min_X = e.target.min_X.value;
    let max_Y = e.target.max_Y.value;
    let min_Y = e.target.min_Y.value;
    let max_Z = e.target.max_Z.value;
    let min_Z = e.target.min_Z.value;

    if (!fileUploaded) {
      max_X = maxX;
      min_X = minX;
      max_Y = maxY;
      min_Y = minY;
      max_Z = maxZ;
      min_Z = minZ;
    }

    let projectDetails = {
      projectName,
      projectDescription,
      clientValue,
      contractor,
      max_X,
      min_X,
      max_Y,
      min_Y,
      max_Z,
      min_Z,
    };

    getProjectDetails(projectDetails);
    localStorage.setItem('project',JSON.stringify(projectDetails))
    navigate('/results')
  };
  return (
    <>
         <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Step 2: Project Summary</h2>
      <div className="mb-4">
        <label className="block font-medium">Project Name</label>
        <input
          type="text"
          name="projectName"
          value={projectName}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter project name"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Project Description</label>
        <textarea
          name="projectDescription"
          className="w-full border rounded px-3 py-2"
          rows="4"
          placeholder="Enter project description"
          value={projectDescription}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Client</label>
        <input
          type="text"
          name="client"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter client's name"
          value={clientValue}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Contractor</label>
        <input
          type="text"
          name="contractor"
          value={contractor}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter contractor's name"
readOnly
        />
      </div>
{fileUploaded===true? <section>
<div className="mb-4">
        <label className="block font-medium">max_X</label>
        <input
          type="number"
          name="max_X"
          defaultValue={Datas.max_X}     
          className="w-full border rounded px-3 py-2"
          placeholder="Enter max_X value"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">min_X</label>
        <input
          type="number"
          name="min_X"
          defaultValue={Datas.min_X}     
          className="w-full border rounded px-3 py-2"
          placeholder="Enter min_X value"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">max_Y</label>
        <input
          type="number"
          name="max_Y"
          defaultValue={Datas.max_Y}     
          className="w-full border rounded px-3 py-2"
          placeholder="Enter max_Y value"
          readOnly
     
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">min_Y</label>
        <input
          type="number"
          name="min_Y"
          defaultValue={Datas.min_Y}     
          className="w-full border rounded px-3 py-2"
          placeholder="Enter min_Y value"
          readOnly
     
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">max_Z</label>
        <input
          type="number"
          name="max_Z"
          defaultValue={Datas.max_Z}   
          className="w-full border rounded px-3 py-2"
          placeholder="Enter max_Z value"
          readOnly

        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">min_Z</label>
        <input
          type="number"
          name="min_Z"
          defaultValue={Datas.min_Z}   
          className="w-full border rounded px-3 py-2"
          placeholder="Enter min_Z value"
          readOnly
 
        />
      </div>
</section>: <section>
<div className="mb-4">
        <label className="block font-medium">max_X</label>
        <input
          type="number"
          name="max_X"
         onChange={(e)=>setMaxX(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter max_X value"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">min_X</label>
        <input
          type="number"
          name="min_X"
          onChange={(e)=>setMinX(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter min_X value"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">max_Y</label>
        <input
          type="number"
          name="max_Y"
          onChange={(e)=>setMaxY(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter max_Y value"
     
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">min_Y</label>
        <input
          type="number"
          name="min_Y"
          onChange={(e)=>setMinY(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter min_Y value"
     
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">max_Z</label>
        <input
          type="number"
          name="max_Z"
          onChange={(e)=>setMaxZ(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter max_Z value"

        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">min_Z</label>
        <input
          type="number"
          name="min_Z"
          onChange={(e)=>setMinZ(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter min_Z value"
 
        />
      </div>
</section>}  
      <div className="mb-4">
        <label className="block font-medium">File Upload (CSV)</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>

      <div className="mt-4">
      
       <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
 Submit
        </button>
        
      </div>
    </form>
    </>
  )
}

export default Step2
