import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://192.168.29.87:8900/api/v1.0/employee";
const saveEmployeeCall = (employee) => axios.post(EMPLOYEE_API_BASE_URL, employee);
export default saveEmployeeCall;