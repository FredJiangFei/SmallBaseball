using Elyte.Application.Exceptions;
using Microsoft.AspNetCore.Identity;
using SmallBaseball.Application.Helpers;
using SmallBaseball.Application.Models;
using SmallBaseball.Infrastructure.Repository.EF;
using System.Security.Claims;

namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class LoginCommandHandler : ICommandHandler<LoginCommand, LoginResult>
    {
        private readonly UserManager<AppUser> _userManager;

        public LoginCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<LoginResult> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
                throw new BusinessValidationException("No user");

            if (!await _userManager.CheckPasswordAsync(user, request.Password))
                throw new BusinessValidationException("Password invalid");

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Hash, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Email, user.Email)
            };
            var tokenString = JwtHelper.GenerateJSONWebToken(claims);
            return new LoginResult
            {
                Email = user.Email,
                Token = tokenString
            };
        }
    }
}
