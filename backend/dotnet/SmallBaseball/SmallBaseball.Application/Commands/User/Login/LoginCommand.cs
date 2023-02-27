namespace SmallBaseball.Application.Commands
{
    public class LoginCommand : ICommand<string>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
