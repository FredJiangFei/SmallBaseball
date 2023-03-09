using MediatR;

namespace SmallBaseball.Application.Commands.Users
{
    public class CreateManagerCommand : ICommand<bool>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}
