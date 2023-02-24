using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Domain.Models.Aggregates.UserAggregate
{
    public class User : AggregateRoot
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public static User Create(string firstName, string lastName)
        {
            return new User
            {
                FirstName = firstName,
                LastName = lastName
            };
        }
    }
}
