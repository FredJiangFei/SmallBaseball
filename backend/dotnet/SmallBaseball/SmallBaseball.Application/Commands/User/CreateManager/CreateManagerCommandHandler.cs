namespace SmallBaseball.Application.Commands.Users
{
    public class CreateManagerCommandHandler : ICommandHandler<CreateManagerCommand, bool>
    {
        public CreateManagerCommandHandler()
        {
        }

        public async Task<bool> Handle(CreateManagerCommand request, CancellationToken cancellationToken)
        {
           
            return true;
        }
    }
}
