using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.API.Models;
using SmallBaseball.Application.Commands.Todos;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Queries.User;

namespace SmallBaseball.Controllers
{
    public class TodosController : BaseController
    {
        private readonly IMediator _mediator;

        public TodosController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ResponseResult<IEnumerable<TodoModel>>> GetAll()
        {
            var query = new GetTodosQuery
            {
                UserId = UserId
            };
            var result = await _mediator.Send(query, HttpContext.RequestAborted);
            return ResponseResult.FromValue(result);
        }

        [HttpPost]
        public async Task<ResponseResult<bool>> Create([FromBody] CreateTodoCommand command)
        {
            command.UserId = UserId;
            var result = await _mediator.Send(command);
            return ResponseResult.FromValue(result);
        }

        [HttpDelete("{id}")]
        public async Task<ResponseResult> Delete([FromRoute] Guid id)
        {
            var command = new DeleteTodoCommand
            {
                Id = id,
                UserId = UserId
            };
            await _mediator.Send(command);
            return ResponseResult.Ok();
        }
    }
}
