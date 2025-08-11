import Styles from './EmployeeCard.module.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee, onEdit, onDelete }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={Styles.Card}>
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
      <p>{employee.phone}</p>
      <p>
        <button
          className={theme}
          onClick={() => onEdit(employee.id)}
        >
          Edit
        </button>
        <button
          className={theme}
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
}

export default EmployeeCard;
