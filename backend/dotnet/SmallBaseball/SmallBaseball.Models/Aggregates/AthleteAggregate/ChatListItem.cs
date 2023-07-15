using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Domain.Models.Aggregates.AthleteAggregate
{
    public class ChatListItem : Entity
    {
        public Guid UserId { get; set; }
        public Guid ChatObjectId { get; set; }
        public Guid LastChatRecordId { get; set; }

        public static ChatListItem Create(Guid userId, Guid chatObjectId, Guid lastChatRecordId)
        {
            return new ChatListItem
            {
                UserId = userId,
                ChatObjectId = chatObjectId,
                LastChatRecordId = lastChatRecordId
            };
        }
    }
}
