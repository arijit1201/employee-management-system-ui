import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import UpdateEmpoloyee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />}/>
          <Route index element={<EmployeeList />}/>
          <Route path="/employeeList" element={<EmployeeList />}/>
          <Route path="/addEmployee" element={<AddEmployee />}/>
          <Route path="/editEmployee/:id" element={<UpdateEmpoloyee />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
