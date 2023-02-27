using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class CreateUserCommandHandler : ICommandHandler<CreateUserCommand, bool>
    {
        private readonly UserManager<User> _userManager;

        public CreateUserCommandHandler(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user != null)
                throw new Exception("User exist");

            user = new User
            {
                Email = request.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = request.Username
            };
            var result = await _userManager.CreateAsync(user, request.Password);
            return true;
        }
    }
}
