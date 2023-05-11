using SmallBaseball.API.Models;
using SmallBaseball.Application.Commands.Todos;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.FunctionalTests.AthleteTests
{
    public class When_Call_AddTodo : ScenarioBase
    {
        [Test]
        public async Task It_Should_AddTodo()
        {
            //Arrange
            Database.SetUp(Athlete);

            //Action
            var command = new CreateTodoCommand
            {
               Title = "Run 5km"
            };

            var result = await PostAsync<ResponseResult>($"/api/todos", command);

            //Assert
            var dbAthlete = Database.Query<Athlete>().First(x => x.Id == Athlete.Id);
            this.ShouldSatisfyAllConditions(
                () => result.ShouldNotBeNull(),
                () => result.Code.ShouldBe(StatusCodes.Status200OK),
                () => dbAthlete.Todos.Count.ShouldBe(1),
                () => dbAthlete.Todos.First().Title.ShouldBe(command.Title)
            );
        }
    }
}
