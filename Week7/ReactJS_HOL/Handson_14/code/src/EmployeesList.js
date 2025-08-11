import EmployeeCard from './EmployeeCard';

function EmployeesList({ employees, onEdit, onDelete }) {
  return (
    <div>
      <h1>Employees List</h1>
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default EmployeesList;
