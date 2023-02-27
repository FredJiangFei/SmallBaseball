namespace SmallBaseball.Application.Commands
{
    public class LoginAdminCommand : ICommand<bool>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
