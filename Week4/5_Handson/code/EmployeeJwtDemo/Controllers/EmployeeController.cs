using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace JwtCorsDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "POC")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var userId = User.FindFirst("UserId")?.Value;
            var roles = string.Join(",", User.FindAll(ClaimTypes.Role).Select(r => r.Value));
            return Ok(new { message = "Protected Employee Data", userId, roles });
        }
    }
}
