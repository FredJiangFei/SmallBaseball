using SmallBaseball.Application.Models;

namespace SmallBaseball.Application.Queries.User
{
    public class GetUsersQueryHandler : IQueryHandler<GetUsersQuery, IEnumerable<UserModel>>
    {
        public async Task<IEnumerable<UserModel>> Handle(GetUsersQuery request, CancellationToken cancellationToken)
        {
            return new List<UserModel>
            {
                new UserModel
                {
                    FirstName = "Fred",
                    LastName= "Jiang"
                }
            };
        }
    }
}
