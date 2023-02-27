using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.Application.Commands.UpdateUser;
using SmallBaseball.Application.Queries.User;
using SmallBaseball.Application.Models;

namespace SmallBaseball.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : BaseController
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<bool> Create()
        {
            var command = new CreateUserCommand
            {
                Username = "Fred",
                Email = "329126523@qq.com",
                Password = "123456789",
            };
            var result = await _mediator.Send(command);
            return result;
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