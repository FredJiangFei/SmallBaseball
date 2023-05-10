using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;
using SmallBaseball.Domain.Models.Exceptions;
using Shouldly;

namespace SmallBaseball.UnitTests.AthleteAggregate
{
   public class When_Call_AddTodo
    {
        [Test]
        public void It_Should_Throw_Exception_If_Title_Was_Not_Long_Enough()
        {
            //Arrange
            var athlete = new Athlete();

            //Action
            var ex = Assert.Throws<DomainException>(() => athlete.AddTodo("Run"));

            //Assert
            Assert.That(ex.Message == "Title should at least 5 character");
        }

        [Test]
        public void It_Should_Add_Todo_Successfully()
        {
            //Arrange
            var athlete = new Athlete();

            //Action
            athlete.AddTodo("Run 5km");

            //Assert
            this.ShouldSatisfyAllConditions(
             () => athlete.Todos.Count.ShouldBe(1),
             () => athlete.Todos[0].ShouldBeOfType<Todo>(),
             () => athlete.Todos[0].Title.ShouldBe("Run 5km")
           );
        }
    }
}
