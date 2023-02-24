namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class CreateUserCommand : ICommand<bool>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
