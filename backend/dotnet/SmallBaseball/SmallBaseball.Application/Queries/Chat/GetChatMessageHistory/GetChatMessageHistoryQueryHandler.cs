using Dapper;
using SmallBaseball.Application.Models.Users;
using MediatR;

namespace SmallBaseball.Application.Queries.Users.GetChatMessageHistory
{
    public class GetChatMessageHistoryQueryHandler : QueryBase, IRequestHandler<GetChatMessageHistoryQuery, IEnumerable<ChatHistoryModel>>
    {
        public GetChatMessageHistoryQueryHandler(QuerySettings settings) : base(settings)
        {
        }

        public async Task<IEnumerable<ChatHistoryModel>> Handle(GetChatMessageHistoryQuery request, CancellationToken cancellationToken)
        {
            var sql = @"SELECT 
                            ChatMessages.Id,
                            ChatMessages.SenderId,
                            CONCAT(Sender.FirstName, ' ', Sender.LastName) AS SenderName,
                       	    ChatMessages.Content,
                            CASE WHEN ChatMessages.SenderId = @SenderId THEN 1 ELSE 0 END IsSender,
                       	    ChatMessages.CreatedDate
                    FROM ChatMessages 
                    INNER JOIN Athletes AS Sender ON Sender.Id = ChatMessages.SenderId
                    WHERE (ChatMessages.SenderId = @SenderId AND ChatMessages.ReceiverId = @ReceiverId) OR 
                            (ChatMessages.SenderId = @ReceiverId AND ChatMessages.ReceiverId = @SenderId)
                    ORDER BY ChatMessages.CreatedDate DESC";

            var messages = await ExecuteAsync(conn => conn.QueryAsync<ChatHistoryModel>(sql, request));
            return messages;

        }
    }
}
