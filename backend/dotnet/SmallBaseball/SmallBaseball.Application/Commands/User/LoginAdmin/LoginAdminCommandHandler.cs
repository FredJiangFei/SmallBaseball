using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SmallBaseball.Infrastructure.Repository.EF;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SmallBaseball.Application.Commands.UpdateUser
{
    public class LoginAdminCommandHandler : ICommandHandler<LoginAdminCommand, string>
    {
        private readonly UserManager<AppUser> _userManager;

        public LoginAdminCommandHandler(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<string> Handle(LoginAdminCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
                throw new Exception("No user");

            if (await _userManager.CheckPasswordAsync(user, request.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                return GenerateJSONWebToken();
            }
            throw new Exception("Wrong password");
        }

        private string GenerateJSONWebToken()
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                issuer: "Test.com",
                audience: "Test.com",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );
            var token = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

            return token;
        }
    }
}
