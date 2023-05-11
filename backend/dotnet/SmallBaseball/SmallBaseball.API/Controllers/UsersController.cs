using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;
using SmallBaseball.API.Models;
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
        public async Task<ResponseResult> Register([FromBody] RegisterCommand command)
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

        [HttpPut("reset-password")]
        public async Task<ResponseResult> ChangePassword([FromBody] ResetPasswordCommand command)
        {
            command.UserId = base.UserId;
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }
    }
}