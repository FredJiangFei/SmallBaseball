using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Application.Commands.Todos
{
    public class DeleteTodoCommandHandler : ICommandHandler<DeleteTodoCommand>
    {
        private readonly IRepository<Athlete> _athleteRepository;

        public DeleteTodoCommandHandler(IRepository<Athlete> athleteRepository)
        {
            _athleteRepository = athleteRepository;
        }

        public async Task Handle(DeleteTodoCommand request, CancellationToken cancellationToken)
        {
            var athlete = _athleteRepository.Get(request.UserId);
            athlete.DeleteTodo(request.Id);
            await _athleteRepository.UpdateAsync(athlete);
        }
    }
}
