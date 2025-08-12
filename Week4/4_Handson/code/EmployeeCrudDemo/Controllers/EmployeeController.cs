[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private static List<Employee> _employees = new List<Employee>
    {
        new Employee
        {
            Id = 1,
            Name = "John Doe",
            Salary = 50000,
            Permanent = true,
            Department = "IT",
            Skills = new List<string> { "C#", "SQL" },
            DateOfBirth = new DateTime(1990, 5, 21)
        },
        new Employee
        {
            Id = 2,
            Name = "Jane Smith",
            Salary = 60000,
            Permanent = false,
            Department = "HR",
            Skills = new List<string> { "Recruitment", "Onboarding" },
            DateOfBirth = new DateTime(1988, 8, 12)
        }
    };

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult<IEnumerable<Employee>> GetEmployees()
    {
        return Ok(_employees);
    }

    // The rest of POST, PUT, DELETE here...
}
