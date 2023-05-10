using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Application.Commands.Todos
{
    public class CreateTodoCommandHandler : ICommandHandler<CreateTodoCommand, bool>
    {
        private readonly IRepository<Athlete> _athleteRepository;

        public CreateTodoCommandHandler(IRepository<Athlete> athleteRepository)
        {
            _athleteRepository = athleteRepository;
        }

        public async Task<bool> Handle(CreateTodoCommand request, CancellationToken cancellationToken)
        {
            var athlete = _athleteRepository.Get(request.UserId);
            athlete.AddTodo(request.Title);
            await _athleteRepository.UpdateAsync(athlete);
            return true;
        }
    }
}
