using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Handson2_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static List<string> employees = new List<string>
        {
            "Alice",
            "Bob",
            "Charlie"
        };

        [HttpGet]
        [ProducesResponseType(200)]
        public IEnumerable<string> Get()
        {
            return employees;
        }
    }
}
