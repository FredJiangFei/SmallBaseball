using SmallBaseball.Api.Models;
using Shouldly;
using SmallBaseball.Application.Commands.Teams;
using SmallBaseball.Domain.Models.Aggregates.TeamAggregate;

namespace SmallBaseball.FunctionalTests.Scenarios.TeamTests
{
    public class When_Call_CreateTeam : ScenarioBase
    {
        [Test]
        public async Task It_Should_CreateTeam()
        {
            //Action
            var command = new CreateTeamCommand
            {
               Name = "Test",
               SportType = "Basketball"
            };

            var result = await PostAsync<ResponseResult<bool>>($"/api/teams", command);

            //Assert
            var teams = Data.Query<Team>();
            this.ShouldSatisfyAllConditions(
              () => teams.Count().ShouldBe(1)
            );
        }
    }
}
