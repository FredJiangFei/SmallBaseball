using Microsoft.AspNetCore.Identity;

namespace SmallBaseball.Infrastructure.Repository.EF
{
    public class AppUser : IdentityUser
    {
        public Guid AthleteId { get; set; }
    }
}
