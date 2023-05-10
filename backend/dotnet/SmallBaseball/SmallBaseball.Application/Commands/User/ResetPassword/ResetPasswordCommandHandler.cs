using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands
{
    public class ResetPasswordCommandHandler : ICommandHandler<ResetPasswordCommand, bool>
    {
        private readonly UserManager<AppUser> _userManager;

        public ResetPasswordCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(ResetPasswordCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByIdAsync(request.UserId.ToString());
            var result = await _userManager.ChangePasswordAsync(user, request.OldPassword, request.Password);
            return result.Succeeded;
        }
    }
}
