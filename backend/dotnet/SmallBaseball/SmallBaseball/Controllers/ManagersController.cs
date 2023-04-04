using SmallBaseball.Application.Commands.Users;
using SmallBaseball.Application.Models.ViewModel;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Api.Models;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Queries.User;

namespace SmallBaseball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin, Manager")]
    public class ManagersController : BaseController
    {
        private readonly IMediator _mediator;

        public ManagersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IEnumerable<ManagerModel>> Get()
        {
            var query = new GetManagersQuery();
            var result = await _mediator.Send(query);
            return result;
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ResponseResult<bool>> Delete([FromRoute]string id)
        {
            var command = new DeleteManagerCommand
            {
                Id = id
            };
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }

        [HttpPost()]
        [Authorize(Roles = "Admin")]
        public async Task<ResponseResult<bool>> Create([FromBody] ManagerCreateRequest request)
        {
            var command = new CreateManagerCommand
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email
            };
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }
    }
}
