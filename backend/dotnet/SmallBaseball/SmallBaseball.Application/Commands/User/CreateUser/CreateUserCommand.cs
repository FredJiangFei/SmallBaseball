namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class CreateUserCommand : ICommand<bool>
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
