using LeagueCallerServer.Database;
using LeagueCallerServer.Model;
using Microsoft.AspNetCore.Mvc;

namespace LeagueCallerServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoLCallerController : ControllerBase
    {
        private readonly LoLCallerDatabaseContext _dbContext;

        public LoLCallerController(LoLCallerDatabaseContext dbContext) { 
        _dbContext = dbContext;
        }


        [HttpPost("register-user", Name = "RegisterUser")]
        public IActionResult RegisterUser([FromBody] User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetAllUsers), user);
        }

        [HttpPost("login-user", Name = "LoginUser")]
        public IActionResult LoginUser([FromBody] LoginModel loginModel)
        {
            // Perform login logic here
            var existingUser = _dbContext.Users.FirstOrDefault(u => u.Email == loginModel.Email && u.Password == loginModel.Password);
            if (existingUser == null)
            {
                return BadRequest("Invalid email or password");
            }
            else
            {
                return Ok(existingUser);
            }
        }


        [HttpGet("get-all-users", Name = "GetAllUsers")]
        public IActionResult GetAllUsers()
        {
            try
            {
                var users = _dbContext.Users.ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error getting users: {ex.Message}");
            }
        }


    }
}
