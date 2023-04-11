using SmallBaseball.Application.Models;

namespace SmallBaseball.Application.Commands
{
    public class RegisterCommand : ICommand<LoginResult>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
