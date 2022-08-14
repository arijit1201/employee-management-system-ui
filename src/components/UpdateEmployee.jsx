import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployeeCall, getEmployeeCall } from "../services/EmployeeService";
const UpdateEmpoloyee = () => {
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async() => {
      try{
        const employeeData = await getEmployeeCall(id);
        setEmployee(employeeData?.data)
      }catch(error){
        console.log(error);
      }
      
    };
    fetchData();

  }, [id])
  

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
      ...employee,
      [e.target.name]: value,
    });
  };
  
  const updateEmployee = (e) => {
    e.preventDefault();
    
    updateEmployeeCall(id, employee)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="flex max-w-2xl mx-auto my-4 shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee details</h1>
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
            onClick={updateEmployee}
            className="rounded py-2 px-6 text-white font-semibold bg-green-400 hover:bg-green-800"
          >
            Update
          </button>
          <button
            className="rounded py-2 px-6 text-white font-semibold bg-red-400 hover:bg-red-800"
            onClick={(e) => {
              navigate("/")
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmpoloyee;
