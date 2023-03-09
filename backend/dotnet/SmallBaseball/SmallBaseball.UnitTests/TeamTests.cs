using Shouldly;
using SmallBaseball.Domain.Models.Aggregates.TeamAggregate;

namespace SmallBaseball.UnitTests
{
    public class TeamTests
    {
        [Test]
        public void Create_Team()
        {
            //Arrange
            var team = Team.Create("Lakers", "Basketball");

            //Assert
            team.Name.ShouldBe("Lakers");
            team.SportType.ShouldBe("Basketball");
        }
    }
}
