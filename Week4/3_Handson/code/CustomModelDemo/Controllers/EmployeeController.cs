using Microsoft.AspNetCore.Mvc;
using CustomModelDemo.Filters;
using CustomModelDemo.Models;
using System;
using System.Collections.Generic;

namespace CustomModelDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [CustomAuthFilter] // This will check Authorization header
    public class EmployeeController : ControllerBase
    {
        private readonly List<Employee> _employees;

        public EmployeeController()
        {
            _employees = GetStandardEmployeeList();
        }

        // GET: api/Employee
        [HttpGet]
        [ProducesResponseType(typeof(List<Employee>), 200)]
        public ActionResult<List<Employee>> GetAll()
        {
            // Uncomment to test exception filter
            // throw new Exception("Something went wrong in GET!");
            return _employees;
        }

        // POST: api/Employee
        [HttpPost]
        public ActionResult AddEmployee([FromBody] Employee emp)
        {
            _employees.Add(emp);
            return Ok(new { message = "Employee added successfully", employee = emp });
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Alice",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department { Id = 101, Name = "HR" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "Communication" },
                        new Skill { Id = 2, Name = "Leadership" }
                    },
                    DateOfBirth = new DateTime(1990, 5, 15)
                },
                new Employee
                {
                    Id = 2,
                    Name = "Bob",
                    Salary = 60000,
                    Permanent = false,
                    Department = new Department { Id = 102, Name = "IT" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 3, Name = "C#" },
                        new Skill { Id = 4, Name = "SQL" }
                    },
                    DateOfBirth = new DateTime(1985, 8, 20)
                }
            };
        }
    }
}
