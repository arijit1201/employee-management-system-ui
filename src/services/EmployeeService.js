import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://192.168.29.87:8900/api/v1.0";
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://192.168.29.87:8900';
export const saveEmployeeCall = (employee) => axios.post(EMPLOYEE_API_BASE_URL+"/employee", employee);
export const getEmployees = () => axios.get(EMPLOYEE_API_BASE_URL+"/employees");
export const deleteEmployeeCall = (id) => axios.delete(EMPLOYEE_API_BASE_URL+"/employee/"+id);
//export default saveEmployeeCall;