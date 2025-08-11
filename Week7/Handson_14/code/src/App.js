// App.js
import './App.css';
import { EmployeesData } from './Employee';
import EmployeesList from './EmployeesList';
import { useState } from 'react';
import ThemeContext from './ThemeContext';

function App() {
  const [employees, setEmployees] = useState(EmployeesData);
  const [theme, setTheme] = useState('light');

  const handleEdit = (id) => {
    alert(`Edit employee with ID: ${id}`);
    // You can replace alert with navigation or form opening logic
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <label>SELECT A THEME </label>
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </div>
      <EmployeesList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </ThemeContext.Provider>
  );
}

export default App;
