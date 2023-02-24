using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.UserAggregate;

namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class CreateUserCommandHandler : ICommandHandler<CreateUserCommand, bool>
    {
        private readonly IRepository<User> _userRepository;

        public CreateUserCommandHandler(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var user = User.Create(request.FirstName, request.LastName);

            await _userRepository.CreateAsync(user);

            return true;
        }
    }
}
