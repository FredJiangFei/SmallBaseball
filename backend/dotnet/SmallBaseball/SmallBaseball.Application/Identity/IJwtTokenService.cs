using System.Security.Claims;

namespace SmallBaseball.Application.Identity
{
    public interface IJwtTokenService
    {
        string GenerateToken(Claim[] claims);
    }
}
