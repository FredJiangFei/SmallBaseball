using Microsoft.AspNetCore.Identity;

namespace SmallBaseball.Infrastructure.Repository.EF
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
