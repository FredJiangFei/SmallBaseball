
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Queries;

namespace SmallBaseball.Application.Queries.User
{
    public class GetTodosQuery : IQuery<IEnumerable<TodoModel>>
    {
        public Guid UserId { get; set; }
    }
}
