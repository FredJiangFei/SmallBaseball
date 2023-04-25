using Microsoft.AspNetCore.Identity;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Infrastructure.Repository.EF
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual List<Todo> Todos { get; set; } = new List<Todo>();
    }
}
