using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Application.Commands.Todos
{
    public class DeleteTodoCommandHandler : ICommandHandler<DeleteTodoCommand, bool>
    {
        private readonly IRepository<Todo> _todoRepository;

        public DeleteTodoCommandHandler(IRepository<Todo> todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public async Task<bool> Handle(DeleteTodoCommand request, CancellationToken cancellationToken)
        {
            var todo = _todoRepository.Get(request.Id);
            await _todoRepository.DeleteAsync(todo);
            return true;
        }
    }
}
