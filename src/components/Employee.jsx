const Employee = ({ employee, deleteEmployee }) => {
  return (
    <tr className='shadow border-b border-r'>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee?.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee?.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee?.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-semibold text-sm">
        <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
          Edit
        </a>
        <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete {/*when we delete an empoloyee in the child component we also want to update the overall state
          of the parent component -> from child we want information to go back to the parent*/}
        </a>
      </td>
    </tr>
  );
};

export default Employee;
