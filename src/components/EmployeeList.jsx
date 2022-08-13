import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployees } from "../services/EmployeeService";
const EmployeeList = () => {
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);
  {
    /* we are using loading to tell us if the data has been fetched from the backend or not */
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((e) => (
                (<tr key={e?.id}>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{e?.firstName}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{e?.lastName}</div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{e?.emailId}</div>
                  </td>
                  <td className="text-right px-6 py-4 whitespace-nowrap font-semibold text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Delete
                    </a>
                  </td>
                </tr>)
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
