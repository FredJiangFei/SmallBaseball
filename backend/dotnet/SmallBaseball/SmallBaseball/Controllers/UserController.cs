using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Queries.User;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;
using SmallBaseball.Api.Models;

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
        public async Task<ResponseResult<LoginResult>> Login([FromBody] LoginCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
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