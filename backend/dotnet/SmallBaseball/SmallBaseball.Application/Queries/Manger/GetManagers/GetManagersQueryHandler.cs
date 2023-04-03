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
                            AspnetUsers.Id,
                            AspnetUsers.FirstName,
                            AspnetUsers.LastName,
                            AspnetRoles.Name Role
                        FROM AspnetUsers
                        INNER JOIN AspnetUserRoles ON AspnetUserRoles.UserId = AspnetUsers.Id
                        INNER JOIN AspnetRoles ON AspnetRoles.Id = AspnetUserRoles.RoleId";
            var users = await ExecuteAsync(conn => conn.QueryAsync<ManagerModel>(sql));
            return users;
        }
    }
}
