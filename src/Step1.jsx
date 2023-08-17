import React, { useContext } from "react";
import { functions } from "./ContextAPI/ContextAPI";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

import { AiFillProject } from "react-icons/ai";
const Step1 = () => {
  const {
    projectName,
    projectDescription,
    clientValue,
    contractor,
    handleProjectName,
    handleProjectDescription,
    handleClientValue,
    handleContractor,
  } = useContext(functions);
  console.log(projectName, projectDescription, clientValue, contractor);
  return (
    <>
      <div className=" lg:mx-auto ">
        <h2 className="text-2xl font-semibold mb-4 text-gray-400">
          Step 1: Project Information
        </h2>
        <div className="mb-4">
          <label className="block font-medium text-gray-400 mb-2">
            Project Name
          </label>
          <AiFillProject className="absolute mt-3 ms-3 text-blue-400 z-50" />
          <input
            type="text"
            name="projectName"
            defaultValue={projectName}
            className="w-full rounded-2xl border relative  ps-10 py-2 shadow-xl shadow-sky-100"
            placeholder="Enter project name"
            onChange={(e) => handleProjectName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-400 mb-2">
            Project Description
          </label>
          <textarea
            name="projectDescription"
            defaultValue={projectDescription}
            onChange={(e) => handleProjectDescription(e.target.value)}
            className="w-full px-5 border relative   py-2 shadow-xl shadow-sky-100"
            rows="4"
            placeholder="Enter project description"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-400 mb-2">Client</label>

          <BsFillPeopleFill className="absolute mt-3 ms-3 text-blue-400 " />
          <input
            type="text"
            name="client"
            defaultValue={clientValue}
            onChange={(e) => handleClientValue(e.target.value)}
            className="w-full rounded-2xl border  ps-10 py-2 shadow-xl shadow-sky-100"
            placeholder="Enter client's name"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-400 mb-2">
            Contractor
          </label>
          <BsFillPeopleFill className="absolute mt-3 ms-3 text-blue-400 z-50 " />
          <input
            type="text"
            name="contractor"
            defaultValue={contractor}
            onChange={(e) => handleContractor(e.target.value)}
            className="w-full rounded-2xl relative border  ps-10 py-2 shadow-xl shadow-sky-100"
            placeholder="Enter contractor's name"
          />
        </div>
        <div></div>
        <div className="mt-4">
          <Link to="/2">
            <button className=" btn w-32  text-white px-8  bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 shadow-lg shadow-blue-300 ">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step1;
