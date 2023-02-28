using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Queries.User;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;

namespace SmallBaseball.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : BaseController
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("register")]
        public async Task<bool> Register([FromBody] RegisterCommand command)
        {
            var result = await _mediator.Send(command);
            return result;
        }

        [HttpPut("login")]
        public async Task<IActionResult> Login([FromBody] LoginCommand command)
        {
            var result = await _mediator.Send(command);
            if(result == "")
                return Unauthorized();

            return Ok(new { Token = result });
        }

        [HttpPost("register/admin")]
        public async Task<bool> RegisterAdmin([FromBody] RegisterAdminCommand command)
        {
            var result = await _mediator.Send(command);
            return result;
        }

        [HttpPut("login/admin")]
        public async Task<IActionResult> LoginAdmin([FromBody] LoginAdminCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(new { Token = result });
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