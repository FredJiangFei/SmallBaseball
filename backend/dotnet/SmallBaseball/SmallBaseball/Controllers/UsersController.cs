using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;
using SmallBaseball.Api.Models;
using Microsoft.AspNetCore.Authorization;

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
        [AllowAnonymous]
        public async Task<ResponseResult<LoginResult>> Register([FromBody] RegisterCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ResponseResult<LoginResult>> Login([FromBody] LoginCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }

        [HttpPost("login/backend")]
        [AllowAnonymous]
        public async Task<ResponseResult<LoginResult>> LoginBackend([FromBody] LoginBackendCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }
    }
}