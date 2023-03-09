using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SmallBaseball.Application.Helpers
{
    public static class JwtHelper
    {
        public static string GenerateJSONWebToken(List<Claim> claims)
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
