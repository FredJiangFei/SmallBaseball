using Microsoft.AspNetCore.Identity;
using SmallBaseball.Application.Identity;
using SmallBaseball.Application.Models;
using SmallBaseball.Infrastructure.Repository.EF;
using System.Security.Claims;

namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class LoginBackendCommandHandler : ICommandHandler<LoginBackendCommand, LoginResult>
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IJwtTokenService _jwtTokenService;

        public LoginBackendCommandHandler(UserManager<AppUser> userManager, IJwtTokenService jwtTokenService)
        {
            _userManager = userManager;
            _jwtTokenService = jwtTokenService;
        }

        public async Task<LoginResult> Handle(LoginBackendCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
                throw new Exception("No user");

            if (!await _userManager.CheckPasswordAsync(user, request.Password))
                throw new Exception("Password invalid");

            var userRoles = await _userManager.GetRolesAsync(user);
            if(userRoles.IndexOf(UserRoles.Admin) == -1 && userRoles.IndexOf(UserRoles.Manager) == -1)
                throw new Exception("No permission");

            var claims = new List<Claim>
            {    
                new Claim(ClaimTypes.Hash, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Email, user.Email)
            };

            foreach (var role in userRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return new LoginResult
            {
                Email = user.Email,
                Token = _jwtTokenService.GenerateToken(claims.ToArray())
            };
        }

       
    }
}
