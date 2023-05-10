using Microsoft.AspNetCore.Http;
using Shouldly;
using SmallBaseball.Api.Models;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.FunctionalTests.AthleteTests
{
    public class When_Call_DeleteTodo : ScenarioBase
    {
        [Test]
        public async Task It_Should_DeleteTodo()
        {
            //Arrange
            var t1 = new Todo { Title = "Run 5km" };
            var t2 = new Todo { Title = "Run 6km" };
            Athlete.Todos = new List<Todo> { t1, t2 };
            Database.SetUp(Athlete);

            //Action
            var result = await DeleteAsync<ResponseResult<bool>>($"/api/todos/{t1.Id}");

            //Assert
            var dbAthlete = Database.Query<Athlete>().First(x => x.Id == Athlete.Id);
            this.ShouldSatisfyAllConditions(
                () => result.ShouldNotBeNull(),
                () => result.Code.ShouldBe(StatusCodes.Status200OK),
                () => dbAthlete.Todos.Count.ShouldBe(1),
                () => dbAthlete.Todos.First().Title.ShouldBe(t2.Title)
            );
        }
    }
}
