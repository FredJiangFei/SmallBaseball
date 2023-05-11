using SmallBaseball.API.Models;
using SmallBaseball.Application.Models;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.FunctionalTests.AthleteTests
{
    public class When_Call_GetTodo : ScenarioBase
    {
        [Test]
        public async Task It_Should_GetTodo()
        {
            //Arrange
            Athlete.Todos = new List<Todo> { new Todo { Title = "Run 5km" } };
            var fred = new Athlete
            {
                FirstName = "Fred",
                LastName = "Jiang",
                Todos = new List<Todo> {
                    new Todo { Title = "Run 6km" },
                    new Todo { Title = "Run 7km" }
                }
            };

            Database.SetUp(Athlete, fred);

            //Action
            var result = await GetAsync<ResponseResult<IEnumerable<TodoModel>>>($"/api/todos");

            //Assert
            this.ShouldSatisfyAllConditions(
                () => result.ShouldNotBeNull(),
                () => result.Code.ShouldBe(StatusCodes.Status200OK),
                () => result.Value.Count().ShouldBe(1),
                () => result.Value.First().Title.ShouldBe("Run 5km")
            );
        }
    }
}
