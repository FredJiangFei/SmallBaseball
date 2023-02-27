using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Queries.User;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;

namespace SmallBaseball.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : BaseController
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("register")]
        public async Task<bool> Register()
        {
            var command = new RegisterCommand
            {
                Email = "329126523@qq.com",
                Password = "123456789",
            };
            var result = await _mediator.Send(command);
            return result;
        }

        [HttpPut("login")]
        public async Task<IActionResult> Login()
        {
            var command = new LoginCommand
            {
                Email = "329126523@qq.com",
                Password = "123456789",
            };
            var result = await _mediator.Send(command);
            if(result == "")
                return Unauthorized();

            return Ok(new { Token = result });
        }

        [HttpPut("login/admin")]
        public async Task<bool> LoginAdmin()
        {
            var command = new LoginAdminCommand
            {
                Email = "329126523@qq.com",
                Password = "123456789",
            };
            var result = await _mediator.Send(command);
            return result;
        }

        [HttpGet]
        public async Task<IEnumerable<UserModel>> Get()
        {
            var query = new GetUsersQuery();
            var result = await _mediator.Send(query);
            return result;
        }
    }
}