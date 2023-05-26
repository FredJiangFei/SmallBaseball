using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Application.Commands.Todos
{
    public class ToggleTodoCommandHandler : ICommandHandler<ToggleTodoCommand>
    {
        private readonly IRepository<Athlete> _athleteRepository;

        public ToggleTodoCommandHandler(IRepository<Athlete> athleteRepository)
        {
            _athleteRepository = athleteRepository;
        }

        public async Task Handle(ToggleTodoCommand request, CancellationToken cancellationToken)
        {
            var athlete = _athleteRepository.Get(request.UserId);
            athlete.ToggleTodo(request.Id);
            await _athleteRepository.UpdateAsync(athlete);
        }
    }
}
