using MediatR;

namespace SmallBaseball.Application.Commands.Todos
{
    public class CreateTodoCommand : ICommand<bool>
    {
        public Guid UserId { get; set; }
        public string Title { get; set; }
    }
}
