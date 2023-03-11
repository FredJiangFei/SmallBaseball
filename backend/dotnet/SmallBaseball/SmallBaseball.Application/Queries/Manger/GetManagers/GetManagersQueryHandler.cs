using SmallBaseball.Application.Models;
using Dapper;
using Elyte.Application.Queries;

namespace SmallBaseball.Application.Queries.User
{
    public class GetManagersQueryHandler : QueryBase, IQueryHandler<GetManagersQuery, IEnumerable<ManagerModel>>
    {
        public GetManagersQueryHandler(QuerySettings settings) : base(settings)
        {
        }

        public async Task<IEnumerable<ManagerModel>> Handle(GetManagersQuery request, CancellationToken cancellationToken)
        {
            var sql = @"SELECT 
                            Id,
                            FirstName,
                            LastName
                        FROM AspnetUsers";
            var users = await ExecuteAsync(conn => conn.QueryAsync<ManagerModel>(sql));
            return users;
        }
    }
}
