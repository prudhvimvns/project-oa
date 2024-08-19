import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeCount, setEmployeeCount] = useState(0);

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/employees/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployees(data.employees);
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    }
  };

  // Fetch employee count
  const fetchEmployeeCount = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/employees/count/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployeeCount(data.count);
    } catch (error) {
      console.error('Failed to fetch employee count:', error);
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <button onClick={fetchEmployees}>Get All Employees</button>
      <button onClick={fetchEmployeeCount}>Get Employee Count</button>

      {employees.length > 0 && (
        <div>
          <h2>Employees:</h2>
          <ul>
            {employees.map((employee, index) => (
              <li key={index}>{employee}</li>
            ))}
          </ul>
        </div>
      )}

      {employeeCount > 0 && <h2>Number of Employees: {employeeCount}</h2>}
    </div>
  );
}

export default App;
