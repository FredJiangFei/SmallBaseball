using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands
{
    public class RegisterAdminCommandHandler : ICommandHandler<RegisterAdminCommand, bool>
    {
        private readonly UserManager<AppUser> _userManager;

        public RegisterAdminCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(RegisterAdminCommand request, CancellationToken cancellationToken)
        {
            var user = new AppUser
            {
                Email = "admin@qq.com",
                UserName = "admin@qq.com"
            };
          
            var res = await _userManager.CreateAsync(user, "123456789");
            await _userManager.AddToRoleAsync(user, UserRoles.Admin);

            return true;
        }
    }
}
