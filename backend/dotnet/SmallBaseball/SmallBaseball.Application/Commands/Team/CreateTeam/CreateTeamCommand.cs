using MediatR;

namespace SmallBaseball.Application.Commands.Teams
{
    public class CreateTeamCommand : ICommand<bool>
    {
        public string Name { get; set; }
        public string SportType { get; set; }
    }
}
