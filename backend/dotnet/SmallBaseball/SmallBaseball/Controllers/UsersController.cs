using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;
using SmallBaseball.Api.Models;

namespace SmallBaseball.Controllers
{
    public class UsersController : BaseController
    {
        private readonly IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("register")]
        public async Task<ResponseResult<LoginResult>> Register([FromBody] RegisterCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }

        [HttpPost("login")]
        public async Task<ResponseResult<LoginResult>> Login([FromBody] LoginCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }

        [HttpPost("login/backend")]
        public async Task<ResponseResult<LoginResult>> LoginBackend([FromBody] LoginBackendCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }
    }
}