using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Domain.Models.Aggregates.TodoAggregate
{
    public class Todo : AggregateRoot
    {
        public string Title { get; set; }

        public static Todo Create(string title)
        {
            return new Todo
            {
                Title = title,
            };
        }
    }
}
