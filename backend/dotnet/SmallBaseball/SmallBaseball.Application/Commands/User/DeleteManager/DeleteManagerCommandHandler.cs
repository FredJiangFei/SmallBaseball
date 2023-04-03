using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands.Users
{
    public class DeleteManagerCommandHandler : ICommandHandler<DeleteManagerCommand, bool>
    {
        private readonly UserManager<AppUser> _userManager;

        public DeleteManagerCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(DeleteManagerCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByIdAsync(request.Id);
            await _userManager.DeleteAsync(user);
            return true;
        }
    }
}
