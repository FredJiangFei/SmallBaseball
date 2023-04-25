using SmallBaseball.Api.Models;
using Shouldly;
using SmallBaseball.Application.Commands.Todos;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.FunctionalTests.Scenarios.TodoTests
{
    public class When_Call_CreateTodo : ScenarioBase
    {
        [Test]
        public async Task It_Should_CreateTodo()
        {
            //Action
            var command = new CreateTodoCommand
            {
               Title = "Run",
            };

            var result = await PostAsync<ResponseResult<bool>>($"/api/todos", command);

            //Assert
            var Todos = Data.Query<Todo>();
            this.ShouldSatisfyAllConditions(
              () => Todos.Count().ShouldBe(1)
            );
        }
    }
}
