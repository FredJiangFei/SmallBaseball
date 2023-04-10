using Microsoft.AspNetCore.Identity;
using SmallBaseball.Domain.Models.Aggregates.TeamAggregate;

namespace SmallBaseball.Infrastructure.Repository.EF
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual List<Team> Teams { get; set; } = new List<Team>();
    }
}
