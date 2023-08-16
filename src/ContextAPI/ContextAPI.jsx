import React, { createContext, useState } from 'react'

export const functions=createContext(null)
const ContextAPI = ({children}) => {
    const[projectName,setProjectName]=useState('')
    const[projectDescription,setProjectDescription]=useState('')
    const[clientValue,setClient]=useState('')
    const[contractor,setContractor]=useState('')
 
const[projectDetails,setProjectDetails]=useState({})

let getProjectDetails=(details)=>{
    setProjectDetails(details)
}

let handleProjectName=(project)=>{
    setProjectName(project)
}



let handleProjectDescription=(projectDes)=>{
    setProjectDescription(projectDes)
}

let handleClientValue=(client)=>{
    setClient(client)
}


let handleContractor=(contractor)=>{
    setContractor(contractor)
}








    let newValues={
        projectName,
        projectDescription,
        clientValue,
        contractor,
        projectDetails,
        getProjectDetails,
        handleProjectName,
handleProjectDescription,
handleClientValue,
handleContractor
    }
  return (
    <div>
    <functions.Provider value={newValues}>
       {children}
     </functions.Provider> 
      
    </div>
  )
}

export default ContextAPI
