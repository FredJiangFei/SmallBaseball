using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Api.Models;
using SmallBaseball.Application.Commands.Teams;

namespace SmallBaseball.Controllers
{
    public class TeamsController : BaseController
    {
        private readonly IMediator _mediator;

        public TeamsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ResponseResult<bool>> Create([FromBody] CreateTeamCommand command)
        {
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }
    }
}
