using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SwaggerPostmanDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static readonly List<string> Employees = new()
        {
            "Alice", "Bob", "Charlie"
        };

        // GET: api/Employee
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetEmployees()
        {
            return Employees;
        }

        // POST: api/Employee
        [HttpPost]
        public ActionResult AddEmployee([FromBody] string employeeName)
        {
            Employees.Add(employeeName);
            return Ok(new { message = "Employee added successfully", employeeName });
        }
    }
}
