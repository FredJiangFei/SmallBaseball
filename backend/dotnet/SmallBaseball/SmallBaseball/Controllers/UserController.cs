using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;
using SmallBaseball.Api.Models;

namespace SmallBaseball.Controllers
{
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


        [HttpPut("login/backend")]
        public async Task<ResponseResult<LoginResult>> LoginBackend([FromBody] LoginBackendCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }
    }
}