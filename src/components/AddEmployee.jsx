import React from "react";
import { useState } from "react";
import saveEmployeeCall from "../services/EmployeeService";
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
      ...employee,
      [e.target.name]: value,
    });
    {
      /* basically this means alongside already existing values ( ...employees ) we are setting 
  a particular value based on the name ( e.target.name will resolve to firstName/lastName/emailId) */
    }
  };

  const saveEmployee = (e) => {
    e.preventDefault(); {/*prevents the refreshing of the page */}
    saveEmployeeCall(employee)
    .then(
      (response) => {
        console.log(response);
      }
    )
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="flex max-w-2xl mx-auto my-4 shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="rounded h-10 w-96 border-2 mt-2 px-2 py-2 focus:outline-none"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>{" "}
          {/*e.target refers to that particular input field as an object. we can get parameters like name or value from it */}
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="rounded h-10 w-96 border-2 mt-2 px-2 py-2 focus:outline-none"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="rounded h-10 w-96 border-2 mt-2 px-2 py-2 focus:outline-none"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button 
          onClick={saveEmployee}
          className="rounded py-2 px-6 text-white font-semibold bg-green-400 hover:bg-green-800">
            Save
          </button>
          <button className="rounded py-2 px-6 text-white font-semibold bg-red-400 hover:bg-red-800">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
