using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Application.Commands.Todos
{
    public class DeleteTodoCommandHandler : ICommandHandler<DeleteTodoCommand, bool>
    {
        private readonly IRepository<Athlete> _athleteRepository;

        public DeleteTodoCommandHandler(IRepository<Athlete> athleteRepository)
        {
            _athleteRepository = athleteRepository;
        }

        public async Task<bool> Handle(DeleteTodoCommand request, CancellationToken cancellationToken)
        {
            var athlete = _athleteRepository.Get(request.UserId);
            athlete.DeleteTodo(request.Id);
            await _athleteRepository.UpdateAsync(athlete);

            return true;
        }
    }
}
