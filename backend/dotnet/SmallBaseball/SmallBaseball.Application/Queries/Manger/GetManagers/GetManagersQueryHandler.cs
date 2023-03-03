using SmallBaseball.Application.Models;

namespace SmallBaseball.Application.Queries.User
{
    public class GetManagersQueryHandler : IQueryHandler<GetManagersQuery, IEnumerable<ManagerModel>>
    {
        public async Task<IEnumerable<ManagerModel>> Handle(GetManagersQuery request, CancellationToken cancellationToken)
        {
            return new List<ManagerModel>
            {
                new ManagerModel
                {
                    Id = Guid.NewGuid(),
                    FirstName = "Fred",
                    LastName= "Jiang"
                }
            };
        }
    }
}
