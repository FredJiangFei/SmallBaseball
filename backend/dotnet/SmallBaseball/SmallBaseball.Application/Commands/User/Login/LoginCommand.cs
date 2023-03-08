using SmallBaseball.Application.Models;

namespace SmallBaseball.Application.Commands
{
    public class LoginCommand : ICommand<LoginResult>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
