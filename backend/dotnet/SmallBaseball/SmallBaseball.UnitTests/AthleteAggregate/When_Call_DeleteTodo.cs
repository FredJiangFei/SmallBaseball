using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;
using Shouldly;

namespace SmallBaseball.UnitTests.AthleteAggregate
{
   public class When_Call_DeleteTodo
    {
        [Test]
        public void It_Should_Delete_Todo_Successfully()
        {
            //Arrange
            var athlete = new Athlete();

            var t1Id = Guid.NewGuid();
            var t2Id = Guid.NewGuid();

            athlete.Todos = new List<Todo>
            {
                new Todo
                {
                    Id = t1Id,
                    Title = "Run 5km",
                },
                 new Todo
                {
                    Id = t1Id,
                    Title = "Run 10km",
                }
            };

            //Action
            athlete.DeleteTodo(t1Id);

            //Assert
            this.ShouldSatisfyAllConditions(
             () => athlete.Todos.Count.ShouldBe(1),
             () => athlete.Todos[0].ShouldBeOfType<Todo>(),
             () => athlete.Todos[0].Title.ShouldBe("Run 10km")
           );
        }
    }
}
