using SmallBaseball.Domain.Models.Core;
using SmallBaseball.Domain.Models.Exceptions;

namespace SmallBaseball.Domain.Models.Aggregates.TodoAggregate
{
    public class Todo : AggregateRoot
    {
        public string Title { get; set; }
        public string Image { get; set; }
        public Guid AthleteId { get; set; }
        public bool Completed { get; set; }

        public static Todo Create(string title, string url)
        {
            if (title.Length < 5)
            {
                throw new DomainException("Title should at least 5 character");
            }

            return new Todo
            {
                Title = title,
                Image = url
            };
        }

        internal void Toggle()
        {
            this.Completed = !this.Completed;
        }
    }
}
