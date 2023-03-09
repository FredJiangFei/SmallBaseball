using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands
{
    public class RegisterCommandHandler : ICommandHandler<RegisterCommand, bool>
    {
        private readonly UserManager<AppUser> _userManager;

        public RegisterCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user != null)
                throw new Exception("User exist");

            user = new AppUser
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                UserName = request.Email
            };
          
            await _userManager.CreateAsync(user, request.Password);
            return true;
        }
    }
}
