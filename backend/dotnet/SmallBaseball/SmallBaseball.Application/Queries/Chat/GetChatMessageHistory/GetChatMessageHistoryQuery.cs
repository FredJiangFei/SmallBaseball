using MediatR;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Models.Users;
using SmallBaseball.Application.Queries;

namespace SmallBaseball.Application.Queries.Users
{
    public class GetChatMessageHistoryQuery : IQuery<IEnumerable<ChatHistoryModel>>
    {
        public Guid SenderId { get; set; }
        public Guid ReceiverId { get; set; }
    }
}
