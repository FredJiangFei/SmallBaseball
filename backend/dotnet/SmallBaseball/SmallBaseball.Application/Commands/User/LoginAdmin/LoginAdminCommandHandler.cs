using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class LoginAdminCommandHandler : ICommandHandler<LoginAdminCommand, bool>
    {
        private readonly UserManager<AppUser> _userManager;

        public LoginAdminCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(LoginAdminCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
                throw new Exception("No user");

            if (await _userManager.CheckPasswordAsync(user, request.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                
            }

            return true;
        }
    }
}
