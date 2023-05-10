using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands.Users
{
    public class CreateManagerCommandHandler : ICommandHandler<CreateManagerCommand, bool>
    {
        private readonly UserManager<AppUser> _userManager;

        public CreateManagerCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(CreateManagerCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user != null)
                throw new Exception("User exist");

            user = new AppUser
            {
                Email = request.Email,
                UserName = request.Email
            };

            await _userManager.CreateAsync(user, "sbb123456");
            await _userManager.AddToRoleAsync(user, UserRoles.Manager);
            return true;
        }
    }
}
