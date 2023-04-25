using MediatR;

namespace SmallBaseball.Application.Commands.Todos
{
    public class CreateTodoCommand : ICommand<bool>
    {
        public string Title { get; set; }
    }
}
