using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Commands;
using SmallBaseball.API.Models;
using Microsoft.AspNetCore.Authorization;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Controllers
{
    public class UsersController : BaseController
    {
        private readonly IMediator _mediator;
        private readonly IRepository<Athlete> _athleteRepository;

        public UsersController(IMediator mediator, IRepository<Athlete> athleteRepository)
        {
            _mediator = mediator;
            _athleteRepository = athleteRepository;
        }

        [HttpGet]
        public async Task<ResponseResult> GetAll()
        {
            var users = _athleteRepository.Query()
                .Select(x => new
                {
                    Id = x.Id,
                    Name = x.FirstName + ' ' + x.LastName
                })
                .ToList();
            return ResponseResult.FromValue(users);
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