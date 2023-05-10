using SmallBaseball.Domain.Models.Core;
using SmallBaseball.Domain.Models.Exceptions;

namespace SmallBaseball.Domain.Models.Aggregates.TodoAggregate
{
    public class Athlete : AggregateRoot
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual List<Todo> Todos { get; set; } = new List<Todo>();

        public static Athlete Create(string firstName, string lastName)
        {
            return new Athlete
            {
                FirstName = firstName,
                LastName = lastName
            };
        }

        public void AddTodo(string title)
        {
            var todo = Todo.Create(title);
            Todos.Add(todo);
        }

        public void DeleteTodo(Guid id)
        {
            var todo = Todos.Find(x => x.Id == id);
            Todos.Remove(todo);
        }
    }
}
