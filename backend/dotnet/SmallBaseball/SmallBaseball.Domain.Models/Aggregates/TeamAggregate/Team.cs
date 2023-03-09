using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Domain.Models.Aggregates.TeamAggregate
{
    public class Team : AggregateRoot
    {
        public string Name { get; set; }
        public string SportType { get; set; }

        public static Team Create(string name, string sportType)
        {
            return new Team
            {
                Name = name,
                SportType = sportType
            };
        }
    }
}
