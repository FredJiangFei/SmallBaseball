using Shouldly;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.UnitTests
{
    public class TodoTests
    {
        [Test]
        public void Create_Todo()
        {
            //Arrange
            var todo = Todo.Create("Read");

            //Assert
            todo.Title.ShouldBe("Read");
        }
    }
}
