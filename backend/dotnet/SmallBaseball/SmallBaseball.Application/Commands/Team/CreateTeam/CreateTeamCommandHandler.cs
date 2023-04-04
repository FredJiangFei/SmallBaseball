using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TeamAggregate;

namespace SmallBaseball.Application.Commands.Teams
{
    public class CreateTeamCommandHandler : ICommandHandler<CreateTeamCommand, bool>
    {
        private readonly IRepository<Team> _teamRepository;

        public CreateTeamCommandHandler(IRepository<Team> teamRepository)
        {
            _teamRepository = teamRepository;
        }

        public async Task<bool> Handle(CreateTeamCommand request, CancellationToken cancellationToken)
        {
            var team = Team.Create(
                request.Name,
                request.SportType
                );
            await _teamRepository.CreateAsync(team);
            return true;
        }
    }
}
