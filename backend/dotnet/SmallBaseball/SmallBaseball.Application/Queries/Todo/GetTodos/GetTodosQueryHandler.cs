using Dapper;
using Microsoft.Extensions.Configuration;
using SmallBaseball.Application.Models;

namespace SmallBaseball.Application.Queries.User
{
    public class GetTodosQueryHandler : QueryBase, IQueryHandler<GetTodosQuery, IEnumerable<TodoModel>>
    {
        public GetTodosQueryHandler(QuerySettings settings) : base(settings)
        {
        }

        public async Task<IEnumerable<TodoModel>> Handle(GetTodosQuery request, CancellationToken cancellationToken)
        {
            var sql = @"SELECT 
                            Todos.Id,
                            Todos.Title
                        FROM Todos
                        WHERE Todos.AthleteId = @UserId;";
            var todos = await ExecuteAsync(conn => conn.QueryAsync<TodoModel>(sql, request));
            return todos;
        }
    }
}
