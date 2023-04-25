using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Application.Commands.Todos
{
    public class CreateTodoCommandHandler : ICommandHandler<CreateTodoCommand, bool>
    {
        private readonly IRepository<Todo> _todoRepository;

        public CreateTodoCommandHandler(IRepository<Todo> todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public async Task<bool> Handle(CreateTodoCommand request, CancellationToken cancellationToken)
        {
            var todo = Todo.Create(request.Title);
            await _todoRepository.CreateAsync(todo);
            return true;
        }
    }
}
