import React, { useContext } from 'react'
import { functions } from './ContextAPI/ContextAPI'
import { Link } from "react-router-dom";
const Step1 = () => {
    const {projectName,
        projectDescription,
        clientValue,
        contractor,
        handleProjectName,
        handleProjectDescription,
        handleClientValue,
        handleContractor}=useContext(functions)
console.log(projectName,projectDescription, clientValue,contractor,)
  return (
    <>
        <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Project Information</h2>
      <div className="mb-4">
        <label className="block font-medium">Project Name</label>
        <input
          type="text"
          name="projectName"
          defaultValue={projectName}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter project name"
        onChange={(e)=>handleProjectName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Project Description</label>
        <textarea
          name="projectDescription"
          defaultValue={projectDescription}
          onChange={(e)=> handleProjectDescription(e.target.value)}
          className="w-full border rounded px-3 py-2"
          rows="4"
          placeholder="Enter project description"
      
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Client</label>
        <input
          type="text"
          name="client"
          defaultValue={clientValue}
          onChange={(e)=>handleClientValue(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter client's name"
     
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Contractor</label>
        <input
          type="text"
          name="contractor"
          defaultValue={contractor}
          onChange={(e)=>handleContractor(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter contractor's name"
      
        />
      </div>
      <div>
        
      </div>
      <div className="mt-4">
       <Link to='/2'> 
       <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
  
        >
          Next
        </button></Link>
      </div>
    </div>
    </>
  )
}

export default Step1
