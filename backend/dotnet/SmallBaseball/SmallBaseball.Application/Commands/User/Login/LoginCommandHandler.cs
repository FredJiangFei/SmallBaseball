using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SmallBaseball.Application.Models;
using SmallBaseball.Infrastructure.Repository.EF;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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
                throw new Exception("No user");

            if (await _userManager.CheckPasswordAsync(user, request.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                var claims = new[]
                {    
                    new Claim(ClaimTypes.Hash, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.Email, user.Email)
                };
                foreach (var role in userRoles)
                {
                    claims.Prepend(new Claim(ClaimTypes.Role, role));
                }

                var tokenString = GenerateJSONWebToken(claims);
                return new LoginResult
                {
                    Email = user.Email,
                    Token = tokenString
                };
            }

            return new LoginResult();
        }

        private string GenerateJSONWebToken(Claim[] claims)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("5B33FFD3-BE79-4549-9A64-7EBA439E68BC"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                issuer: "sbb.com",
                audience: "sbb.com",
                claims: claims,
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );
            var token = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return token;
        }
    }
}
