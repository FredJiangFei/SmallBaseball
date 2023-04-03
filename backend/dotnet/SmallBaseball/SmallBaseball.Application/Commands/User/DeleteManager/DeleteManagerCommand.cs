using MediatR;

namespace SmallBaseball.Application.Commands.Users
{
    public class DeleteManagerCommand : ICommand<bool>
    {
        public string Id { get; set; }
    }
}
