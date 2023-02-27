namespace SmallBaseball.Application.Commands
{
    public class RegisterCommand : ICommand<bool>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
