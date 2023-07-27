using MediatR;
using Microsoft.AspNetCore.Http;

namespace SmallBaseball.Application.Commands.Todos
{
    public class CreateTodoCommand : ICommand<bool>
    {
        public Guid UserId { get; set; }
        public string Title { get; set; }
        public IFormFile Image { get; set; }
    }
}
