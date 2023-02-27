namespace SmallBaseball.Application.Commands
{
    public class LoginCommand : ICommand<bool>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
