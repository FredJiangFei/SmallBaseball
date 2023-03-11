using MediatR;
using SmallBaseball.Application.Models;

namespace SmallBaseball.Application.Queries.User
{
    public class GetManagersQuery : IQuery<IEnumerable<ManagerModel>>
    {
    }
}
