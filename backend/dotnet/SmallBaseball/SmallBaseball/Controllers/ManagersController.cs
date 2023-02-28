using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Queries.User;

namespace SmallBaseball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ManagersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet, Authorize]
        public async Task<IEnumerable<ManagerModel>> Get()
        {
            var query = new GetManagersQuery();
            var result = await _mediator.Send(query);
            return result;
        }
    }
}
