PRAGMA foreign_keys = ON;

-- Create Departments table
CREATE TABLE Departments (
    DepartmentID INTEGER PRIMARY KEY,
    DepartmentName TEXT NOT NULL
);

-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL,
    DepartmentID INTEGER NOT NULL,
    Salary NUMERIC(10,2),
    JoinDate TEXT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Insert sample data into Departments
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance');

-- Insert sample data into Employees
INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES
(1, 'John', 'Doe', 1, 5000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 2, 6000.00, '2019-03-22'),
(3, 'Bob', 'Johnson', 3, 5500.00, '2021-07-01');

-- Simulate scalar function fn_CalculateAnnualSalary
-- For EmployeeID = 1
SELECT 
    FirstName,
    LastName,
    Salary AS MonthlySalary,
    Salary * 12 AS AnnualSalary
FROM Employees
WHERE EmployeeID = 1;

-- Create a view to simulate a reusable scalar function
CREATE VIEW EmployeeAnnualSalaries AS
SELECT 
    EmployeeID,
    FirstName,
    LastName,
    Salary * 12 AS AnnualSalary
FROM Employees;

-- Example usage of the view
SELECT AnnualSalary FROM EmployeeAnnualSalaries WHERE EmployeeID = 1;
