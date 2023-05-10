using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SmallBaseball.Application.Identity
{
    public class JwtTokenService : IJwtTokenService
    {
        private readonly JwtSettings _settings;
        public JwtTokenService(JwtSettings settings)
        {
            _settings = settings;
        }

        public string GenerateToken(Claim[] claims)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_settings.Key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.UtcNow.Add(_settings.Expiration);

            var token = new JwtSecurityToken(_settings.Issuer,
                _settings.Audience,
                claims,
                expires: expires,
                signingCredentials: credentials,
                notBefore: DateTime.UtcNow);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
