using MediatR;

namespace SmallBaseball.Application.Commands.Todos
{
    public class DeleteTodoCommand : ICommand
    {
        public Guid UserId { get; set; }
        public Guid Id { get; set; }
    }
}
