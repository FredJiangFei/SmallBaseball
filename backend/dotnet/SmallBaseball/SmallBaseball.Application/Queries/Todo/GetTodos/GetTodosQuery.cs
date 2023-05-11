using SmallBaseball.Application.Models;

namespace SmallBaseball.Application.Queries.User
{
    public class GetTodosQuery : IQuery<IEnumerable<TodoModel>>
    {
        public Guid UserId { get; set; }
    }
}
